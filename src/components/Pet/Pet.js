import React, { useContext, useState, useEffect, useRef } from 'react';
import { ImageAnimator } from "../../utils";
import {
    PET_EAT_FRAMES,
    PET_STAND_FRAMES,
    PET_HUNGRY,
    PET_SAD_FRAME
} from '../../store';
import { PetContext } from './Petcontext.js';
import { Food } from "../Food/Food.js";

export function Pet() {
    const { energy, happiness, health, feedPet } = useContext(PetContext);
    const [animation, setAnimation] = useState(PET_STAND_FRAMES);
    const [eating, setEating] = useState(false);
    const [foodVisible, setFoodVisible] = useState(false);
    const [foodFade, setFoodFade] = useState(false); // ✅ trạng thái mờ dần
    const dropZoneRef = useRef(null);

    const EAT_INTERVAL = 100;
    const EAT_DURATION = PET_EAT_FRAMES.length * EAT_INTERVAL;

    useEffect(() => {
        if (eating) return;

        if (health < 50) setAnimation(PET_SAD_FRAME);
        else if (energy < 50) setAnimation(PET_HUNGRY);
        else if (happiness < 50) setAnimation(PET_SAD_FRAME);
        else setAnimation(PET_STAND_FRAMES);
    }, [health, energy, happiness, eating]);

    const handleItemDrop = (x, y, snapTo) => {
        const dropRect = dropZoneRef.current?.getBoundingClientRect();
        if (!dropRect) return;

        const centerX = dropRect.left + dropRect.width / 2;
        const centerY = dropRect.top + dropRect.height / 2;
        const distance = Math.hypot(x - centerX, y - centerY);

        if (distance < 40) {
            snapTo({
                x: dropRect.left + 5,
                y: dropRect.top + 5
            });

            setEating(true);
            feedPet?.();
            console.log("🍴 Pet bắt đầu ăn...");

            // ✅ Mờ dần sau 2/3 thời gian ăn
            setTimeout(() => {
                setFoodFade(true);
            }, (2 / 3) * EAT_DURATION);
        }
    };

    const handleFinishEating = () => {
        setEating(false);
        setFoodVisible(false); // ✅ Ẩn hoàn toàn sau khi ăn xong
        setFoodFade(false);    // ✅ Reset hiệu ứng
        console.log("✅ Pet đã ăn xong.");
    };

    return (
        <div
            id="game-container"
            style={{
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                position: 'relative',
                padding: '10px'
            }}
        >
            <div className="pet-frame">
                {eating ? (
                    <ImageAnimator
                        images={PET_EAT_FRAMES}
                        interval={100}
                        loop={false}
                        onFinish={handleFinishEating}
                    />
                ) : (
                    <ImageAnimator
                        images={animation}
                        interval={300}
                        loop={true}
                    />
                )}
                <div ref={dropZoneRef} className="pet-mouth-zone" />
            </div>

            {/* ✅ Hiển thị thức ăn + fade-out class */}
            {foodVisible && (
                <div className={foodFade ? "food-fade-out" : ""}>
                    <Food onDrop={handleItemDrop} />
                </div>
            )}

            {/* ✅ Nút đặt lại thức ăn */}
            <button
                onClick={() => {
                    setFoodVisible(true);
                    setFoodFade(false);
                }}
                disabled={foodVisible}
                style={{
                    marginTop: '10px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    cursor: foodVisible ? 'not-allowed' : 'pointer'
                }}
            >
                🍖 Đặt thức ăn
            </button>
        </div>
    );
}
