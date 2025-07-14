import React, { useEffect, useRef, useState, useContext, useCallback } from "react";
import { PetContext } from "./Pet";

// Cre by: https://github.com/Vasu7389/react-project-ideas/tree/master/day006

export function Dino() {
    //ref to get 'dino' html element in js
    const dinoRef = useRef();
    const [isPlay, setIsPlay] = useState(false);
    //ref to get 'cactus' html element in js
    const cactusRef = useRef();
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    //method to add 'jump' class every '300ms' as the class jump css has jumping animation of 0.3s(300ms).
    //so on each key press we need to add animation and remove animation
    const {
        energy, setEnergy,
        happiness, setHappiness,
    } = useContext(PetContext);

    const jump = useCallback(() => {
        if (gameStarted && isPlay && dinoRef.current && !dinoRef.current.classList.contains("jump")) {
            dinoRef.current.classList.add("jump");

            setTimeout(() => {
                dinoRef.current?.classList.remove("jump");
            }, 500);
        }
    }, [gameStarted, isPlay]);

    const startGame = useCallback(() => {
        setScore(0);
        setGameStarted(true);
        setIsPlay(true);
    }, []);

    const retryGame = useCallback(() => {
        setScore(0);
        setGameStarted(true);
        setIsPlay(true);
    }, []);

    //useEffect to track whether dino position and cactus position is intersecting
    //if yes, then game over.
    useEffect(() => {
        if (isPlay) {
            if (energy <= 2) {
                alert("Đói rùi cho ăn đi")
                setIsPlay(false);
                setGameStarted(false);
            } else {
                setEnergy(prev => prev - 1);
                
            }
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
                    setGameStarted(false);
                } else {
                    setScore(prev => prev + 1);
                }
            }, 10);

            return () => {
                const sum = Math.floor((score/100));
                setHappiness(prev => prev + sum < 100 ? prev + sum : 100);
                clearInterval(isAlive);
            }
        }

    }, [isPlay]);

    //hook to call jump method on any keypress
    useEffect(() => {
        document.addEventListener("keydown", jump);
        return () => document.removeEventListener("keydown", jump);
    }, [jump]);

    return (
        <div className="game">
            <div style={{ fontFamily: 'monospace' }}>Điểm : {score}</div>
            {isPlay ? (
                <>
                    <div id="dino" ref={dinoRef} style={{ transform: 'translateX(30px)' }}></div>
                    <div id="cactus" ref={cactusRef}></div>
                </>
            ) : (
                <div className="game-menu">
                    {!gameStarted ? (
                        <>
                            <div>Bấm CHƠI để bắt đầu</div>
                            <button onClick={startGame} className="game-button play-button">
                                CHƠI
                            </button>
                        </>
                    ) : (
                        <>
                            <div>KẾT THÚC</div>
                            <div>Điểm: {score}</div>
                            <button onClick={retryGame} className="game-button retry-button">
                                CHƠI LẠI
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}