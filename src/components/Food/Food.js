import { useState, useEffect } from 'react';
import { PET_FOODS } from '../../store';

export function Food({ x = 0, y = 0, onDrop }) {
    const [position, setPosition] = useState({ x, y });
    const [dragging, setDragging] = useState(false);
    const [imageSrc, setImageSrc] = useState('/assets/food.png');

    function randomChoiceFromArray(arr) {
        const index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

    useEffect(() => {
        const randomImage = randomChoiceFromArray(PET_FOODS);
        setImageSrc(randomImage);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (dragging) {
                setPosition(prev => ({
                    x: prev.x + e.movementX,
                    y: prev.y + e.movementY
                }));
            }
        };

        const handleMouseUp = (e) => {
            if (dragging) {
                setDragging(false);

                if (typeof onDrop === 'function') {
                    const currentX = e.clientX;
                    const currentY = e.clientY;

                    onDrop(currentX, currentY, (snapTo) => {
                        const containerRect = document
                            .querySelector('#game-container')
                            ?.getBoundingClientRect();

                        if (!containerRect) return;

                        const offsetX = snapTo.x - containerRect.left;
                        const offsetY = snapTo.y - containerRect.top;

                        setPosition({ x: offsetX, y: offsetY });
                    });
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    const handleMouseDown = () => {
        setDragging(true);
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                cursor: 'grab',
                userSelect: 'none',
                width: 50,
                height: 50,
                zIndex: 1000
            }}
        >
            <img src={imageSrc} style={{ width: '100%', height: '100%' }} alt="Food" />
        </div>
    );
}
