// src/components/PetState.js
import React, { useState, useRef } from 'react';
import { Pet } from '../utils';


export function PetState() {
  const petRef = useRef(new Pet(100, 100, 100));
  const [text, setText] = useState(petRef.current.getPet());

  const decreaseEnergy = () => {
    const newPet = petRef.current.updateEnergyPet(-10);
    setText(newPet);
  };

  const decreaseHappiness = () => {
    const newPet = petRef.current.updateHappinessPet(-10);
    setText(newPet); 
  };

  const decreaseHealth = () => {
    const newPet = petRef.current.updateHealthPet(-10);
    setText(newPet);
  };

  return (
    <div className="pet-state">
        <div className="bar-energy" >
            <div className='status-box' style={{width: `${text.energy}%`}}><p >Energy</p></div>
        </div>
        <div className="bar-happiness">
            <p>Happiness: </p> <div className='bar'>{text.happiness}</div>
            <div className='status-box' style={{width: `${text.happiness}%`}}><p >happiness</p></div>
        </div>
        <div className="bar-health">
            <p>Health: </p> <div className='bar'> {text.health} </div>
        </div>
        {/* <button onClick={decreaseEnergy}>Decrease Energy</button>
        <button onClick={decreaseHappiness}>Decrease Happy</button>
        <button onClick={decreaseHealth}>Decrease Health</button> */}
    </div>
  );
}