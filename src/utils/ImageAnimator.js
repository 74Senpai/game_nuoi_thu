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
    const imageUrl = `${process.env.REACT_APP_IMG_FRAME_URL}` + `${images[index]}`
        return (
        <img src={imageUrl} alt={`frame-${index}`}  onError={(e) => console.error('Image load error:', e)}/>
        
    );
}