import React, {useState, useEffect} from "react";

function Ground() {
    return (
        <div className="home-background-ground">

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
            {/* Sky gradient background */}
            <div className="sky-background"></div>

            {/* Far clouds - slowest parallax */}
            <div
                className="cloud-layer"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
                <div className="cloud cloud1"></div>
                <div className="cloud cloud2"></div>
                <div className="cloud cloud3"></div>
            </div>

            {/* Medium clouds - medium parallax */}
            <div
                className="cloud-layer"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
                <div className="cloud cloud4"></div>
                <div className="cloud cloud5"></div>
                <div className="cloud cloud6"></div>
            </div>

            {/* Close clouds - faster parallax */}
            <div
                className="cloud-layer"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
                <div className="cloud cloud7"></div>
                <div className="cloud cloud8"></div>
            </div>

            {/* Flying birds */}
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