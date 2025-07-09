import React, { useEffect, useState } from 'react';

export function ImageAnimator({ images, interval = 100 }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;

        const timer = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    if (!images || images.length === 0) {
        return <div>No images provided</div>;
    }

    return (
        <img src={images[index]} alt={`frame-${index}`} />
    );
}