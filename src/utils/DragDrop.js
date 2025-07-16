import { useState, useEffect } from 'react';

export function useDrag({ x = 0, y = 0, onDrop = () => {} }) {
    const [position, setPosition] = useState({ x, y });
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        function handleMouseMove(e) {
            if (dragging) {
                setPosition(prev => ({
                    x: prev.x + e.movementX,
                    y: prev.y + e.movementY
                }));
            }
        }

        function handleMouseUp(e) {
            if (dragging) {
                setDragging(false);
                onDrop(e.clientX, e.clientY); // gọi callback khi thả
            }
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    function handleMouseDown() {
        setDragging(true);
    }

    return {
        position,
        handleMouseDown,
    };
}
