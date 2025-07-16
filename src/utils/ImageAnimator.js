import React, { useEffect, useState } from 'react';
import { PUBLIC_ASSET_URL } from '../config';

export function ImageAnimator({ images, interval = 100, loop = true, onFinish }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0); // ✅ reset mỗi khi images thay đổi
    }, [images]);

    useEffect(() => {
        if (!images || images.length === 0) return;

        let timer = null;

        if (loop) {
            timer = setInterval(() => {
                setIndex(prev => (prev + 1) % images.length);
            }, interval);
        } else {
            timer = setInterval(() => {
                setIndex(prev => {
                    if (prev + 1 >= images.length) {
                        clearInterval(timer);
                        if (onFinish) onFinish();
                        return prev;
                    }
                    return prev + 1;
                });
            }, interval);
        }

        return () => clearInterval(timer);
    }, [images, interval, loop, onFinish]);

    if (!images || images.length === 0) {
        return <div>No images provided</div>;
    }

    const imageUrl = PUBLIC_ASSET_URL + `${images[index]}`;
    return (
        <img
            src={imageUrl}
            className='pet-frame'
            alt={`frame-${index}`}
            onError={(e) => console.error('Image load error:', e)} />
    );
}
