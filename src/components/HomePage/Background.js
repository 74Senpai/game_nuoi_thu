import React, { useState, useEffect } from "react";

function TV({children}){
    return (
        <div className="TV-design">
            <div className="TV-boder">
                <div className="TV-content">{children}</div>
            </div>
            <div className="TV-leg left"></div>
            <div className="TV-leg right"></div>
        </div>
        
    )
}

function Ground() {
    return (
        <div className="home-background-ground">
            <div className="game-frame">
                <TV>
                    <iframe width="auto" src="https://www.youtube.com/embed/spuO7OpS6zw?&autoplay=1&mute=1"></iframe>
                </TV>
            </div>
        </div>
    )
}

function Sky() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home-background-sky">
            <div className="sky-background"></div>
            <div
                className="cloud-layer"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
                <div className="cloud cloud1"></div>
                <div className="cloud cloud2"></div>
                <div className="cloud cloud3"></div>
            </div>

            <div
                className="cloud-layer"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
                <div className="cloud cloud4"></div>
                <div className="cloud cloud5"></div>
                <div className="cloud cloud6"></div>
            </div>

            <div
                className="cloud-layer"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
                <div className="cloud cloud7"></div>
                <div className="cloud cloud8"></div>
            </div>

            <div className="bird-container">
                <div className="bird bird1">🐦</div>
                <div className="bird bird2">🐦</div>
                <div className="bird bird3">🐦</div>
            </div>
        </div>
    )
}

export function Background() {
    return (
        <div className="home-background">
            <Sky />
            <Ground />
        </div>
    )
}