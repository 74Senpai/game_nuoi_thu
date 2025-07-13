import { ImageAnimator } from "../../utils";
import { PET_EAT_FRAMES } from '../../store';
import { PetContext } from './/Petcontext.js';
import React, { useContext, useState, useEffect } from 'react';

export function Pet() {
    const { energy, happiness, health } = useContext(PetContext);

    const [animation, setAnimation] = useState(() => {
        if (health < 50) {
            return "Quá là ốm luôn";
        } else if (energy < 50) {
            return "Quá là đói luôn";
        } else if (happiness < 50) {
            return "Quá là buồn luôn";
        } else {
            return "Bình Thường";
        }
        return "Bình Thường";
    });

    useEffect(() => {
        if (health < 50) {
            setAnimation("Quá là ốm luôn");
        } else if (energy < 50) {
            setAnimation("Quá là đói luôn");
        } else if (happiness < 50) {
            setAnimation("Quá là buồn luôn");
        } else {
            setAnimation("Bình Thường");
        }
    }, [health, energy, happiness]);

    return (<>
        <div>
            <p>{animation}</p>
            {/* <ImageAnimator images={animation} interval={300} /> */}
        </div>
    </>);

}