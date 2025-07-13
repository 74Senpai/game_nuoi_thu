// src/components/PetState.js
import React, { useContext, useState, useEffect, useRef } from 'react';

import { PetContext } from './/Petcontext.js';

export function PetState() {
  const {
    energy, setEnergy,
    happiness, setHappiness,
    health, setHealth
  } = useContext(PetContext);

  const [happinessIcon, setHappinessIcon] = useState('sentiment_satisfied');
  // UI 
  function updateEnergyUI(value) {
    const bar = document.querySelector('.status-box-energy');
    if (!bar) return;

    if (value <= 25) bar.style.backgroundColor = "rgb(0, 100, 255)";
    else if (value <= 50) bar.style.backgroundColor = "rgb(0, 150, 255)";
    else bar.style.backgroundColor = "rgb(0, 200, 255)";
  }

  function updateHealthUI(value) {
    const bar = document.querySelector('.status-box-health');
    if (!bar) return;
    
    if (value <= 25) bar.style.backgroundColor = "rgb(200, 0, 0)";
    else if (value <= 50) bar.style.backgroundColor = "rgb(255, 100, 0)";
    else if (value <= 75) bar.style.backgroundColor = "rgb(255, 200, 0)";
    else bar.style.backgroundColor = "rgb(0, 200, 0)";
  }
  
  function updateHappinessUI(value) {
    const bar = document.querySelector('.status-box-happiness');
    if (!bar) return;

    if (value <= 25) bar.style.backgroundColor = "rgb(255,105,180)";
    else if (value <= 50) bar.style.backgroundColor = "rgb(255,165,0)";
    else bar.style.backgroundColor = "rgb(255, 223, 0)";
  }
  
  function decreaseEnergy() {
    setEnergy((prev) => {
      const newEnergy = Math.max(0, prev - 1);
      updateEnergyUI(newEnergy);
      return newEnergy;
    });
  }
  function decreaseHealth() {
    setHealth(prev => {
      const newHealth = Math.max(0, prev - 5);
      updateHealthUI(newHealth);
      return newHealth;
    });
  }

  function decreaseHappiness() {
    setHappiness(prev => {
      const newHappiness = Math.max(0, prev - 1);
      updateHappinessUI(newHappiness);

      if (newHappiness > 50) {
        setHappinessIcon('sentiment_satisfied');
      } else {
        setHappinessIcon('sentiment_dissatisfied');
      }

      if (newHappiness <= 0 && happiness === 0) {
        decreaseHealth();
      }
      return newHappiness;
    });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      decreaseHappiness()
      // setEnergy(2)
      // setEnergy(100)
      // setHappiness(100)
      // setHealth(100)
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pet-state">
      <div className="bar-energy" >
        <div className='status-box-energy' style={{ width: `${energy}%` }}><p ><span class="material-symbols-outlined">bolt</span></p></div>
      </div>
      <div className="bar-happiness">
        <div className='status-box-happiness' style={{ width: `${happiness}%` }}><p ><span class="material-symbols-outlined">{happinessIcon}</span></p></div>
      </div>
      <div className="bar-health">
        <div className='status-box-health' style={{ width: `${health}%` }}><p ><span class="material-symbols-outlined">health_cross</span></p></div>
      </div>
    </div>
  );
}