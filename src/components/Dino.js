import React, { useEffect, useRef, useState } from "react";

// Cre by: https://github.com/Vasu7389/react-project-ideas/tree/master/day006

export function Dino() {
    //ref to get 'dino' html element in js
    const dinoRef = useRef();
    const [isPlay, setIsPlay] = useState(false);
    //ref to get 'cactus' html element in js
    const cactusRef = useRef();
    const [score, setScore] = useState(0);

    //method to add 'jump' class every '300ms' as the class jump css has jumping animation of 0.3s(300ms).
    //so on each key press we need to add animation and remove animation


    const jump = () => {
        if (isPlay === false) {
            setScore(0)
        }
        setIsPlay(true)
        if (dinoRef.current && !dinoRef.current.classList.contains("jump")) {
            dinoRef.current.classList.add("jump");

            setTimeout(function () {
                dinoRef.current.classList.remove("jump");
            }, 500);
        }
    };

    //useEffect to track whether dino position and cactus position is intersecting
    //if yes, then game over.
    useEffect(() => {
        if (isPlay) {
            const isAlive = setInterval(function () {
                // get current dino Y position
                const dinoTop = parseInt(
                    getComputedStyle(dinoRef.current).getPropertyValue("top")
                );

                // get current cactus X position
                let cactusLeft = parseInt(
                    getComputedStyle(cactusRef.current).getPropertyValue("left")
                );

                // detect collision
                if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
                    // collision
                    setIsPlay(false)
                } else {
                    setScore(prev => prev + 1);
                }
            }, 10);
            return () => clearInterval(isAlive);
        }

    }, [isPlay]);

    //hook to call jump method on any keypress
    useEffect(() => {
        document.addEventListener("keydown", jump);
        return () => document.removeEventListener("keydown", jump);
    }, []);

    return (
        <div className="game">
            Score : {score}
            {isPlay === true &&
                <>
                    <div id="dino" ref={dinoRef}></div>
                    <div id="cactus" ref={cactusRef}></div>
                </> || <div>"GAME OVER"</div>
            }
        </div>
    );
}

