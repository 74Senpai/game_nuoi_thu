import React, { useState, useEffect, useRef } from "react";
import { PUBLIC_ASSET_URL, DIR_BACKGROUND_MUSIC } from "../../config.js";

import { Pet } from "../Pet";
import { Food } from "../Food/Food.js";
import { Dino } from "../Dino.js";

function TV({ children }) {
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

function BackgroundMusic() {
    const audioRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    };

    return (
        <div className='speaker-design'>
            <div className="speaker-border" >
                <div className="speaker-output" >
                    <div className="speaker"></div>
                    {/* <audio ref={audioRef} src={PUBLIC_ASSET_URL + DIR_BACKGROUND_MUSIC +'/Morning.mp3'} loop /> */}
                </div>
                <div className="speaker-output"><div className="speaker"></div></div>
                <div className="speaker-output"><div className="speaker"></div></div>
            </div>
        </div>
    );
}

function Ground() {
    return (
        <div className="home-background-ground" style={{position: 'relative'}}>
            <Pet />
            {/* <Food /> */}
            <div className="game-frame">
                <TV>
                    <Dino />
                </TV>
                <BackgroundMusic />
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