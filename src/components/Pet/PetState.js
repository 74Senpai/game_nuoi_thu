// src/components/PetState.js
import React, { useState, useEffect, useRef } from 'react';
import { Pet } from '../../utils';


export function PetState() {
  const petRef = useRef(new Pet(100, 100, 100));
  const [text, setText] = useState(petRef.current.getPet());
  const [happiness,setHappiness] = useState('sentiment_satisfied')

//   function decreaseEnergy() {
//     const newPet = petRef.current.updateEnergyPet(-10);
//     const bar = document.getElementsByClassName('status-box-energy')[0]
//     if (newPet.energy === 50) {
//       bar.style.backgroundColor = "rgb(0, 150, 255)"
//     }
//     else if (newPet.energy === 25) {
//       bar.style.backgroundColor = "rgb(0, 100, 255)"
//     }
//     setText(newPet)
//   };

  function decreaseHealth() {
    const bar = document.getElementsByClassName('status-box-health')[0]
    
    const newPet = petRef.current.updateHealthPet(-5);
    if (newPet.health === 75) {
      bar.style.backgroundColor = "rgb(255, 200, 0)"
    }
    
    else if (newPet.health === 50) {
      bar.style.backgroundColor = "rgb(255, 100, 0)"
      
    }
    else if (newPet.health === 25) {
      bar.style.backgroundColor = "rgb(200, 0, 0)"
    }
    setText(newPet)
  };
  function decreaseHappiness() {
    const newPet = petRef.current.updateHappinessPet(-0.5);
    const bar = document.getElementsByClassName('status-box-happiness')[0]
    if (newPet.happiness === 50) {
      bar.style.backgroundColor = "rgb(255,165,0)"
    }
    else if (newPet.happiness === 25) {
      bar.style.backgroundColor = "rgb(255,105,180)"
    }
    if(newPet.happiness > 50){
      setHappiness('sentiment_satisfied')
    }
    else{
      setHappiness('sentiment_dissatisfied')
    }
    if (newPet.happiness <= 0) {
      decreaseHealth()
    } else {
      setText(newPet);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      decreaseHappiness()
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pet-state">
      <div className="bar-energy" >
        <div className='status-box-energy' style={{ width: `${text.energy}%` }}><p ><span class="material-symbols-outlined">bolt</span></p></div>
      </div>
      <div className="bar-happiness">
        <div className='status-box-happiness' style={{ width: `${text.happiness}%` }}><p ><span class="material-symbols-outlined">{happiness}</span></p></div>
      </div>
      <div className="bar-health">
        <div className='status-box-health' style={{ width: `${text.health}%` }}><p ><span class="material-symbols-outlined">health_cross</span></p></div>
      </div>
    </div>
  );
}