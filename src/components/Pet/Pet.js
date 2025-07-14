import { ImageAnimator } from "../../utils";
import { PET_EAT_FRAMES, PET_STAND_FRAMES, PET_HUNGRY, PET_SAD_FRAME } from '../../store';
import { PetContext } from './/Petcontext.js';
import React, { useContext, useState, useEffect } from 'react';

export function Pet() {
    const { energy, happiness, health } = useContext(PetContext);

    const [animation, setAnimation] = useState(() => {
        if (health < 50) {
            return PET_SAD_FRAME;
        } else if (energy < 50) {
            return PET_HUNGRY;
        } else if (happiness < 50) {
            return PET_SAD_FRAME;
        } else {
            return PET_STAND_FRAMES;
        }
    });

    useEffect(() => {
        if (health < 50) {
            setAnimation(PET_SAD_FRAME); // ?????????????????????????????????????????
        } else if (energy < 50) {
            setAnimation(PET_HUNGRY);
        } else if (happiness < 50) {
            setAnimation(PET_SAD_FRAME);
        } else {
            setAnimation(PET_STAND_FRAMES);
        }
    }, [health, energy, happiness]);

    return (<>
        <div>
            {/* <p>{animation}</p> */}
            <ImageAnimator images={animation} interval={300} />
        </div>
    </>);

}