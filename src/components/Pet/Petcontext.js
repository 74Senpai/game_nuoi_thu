import React, { createContext, useContext, useState, useEffect } from 'react';

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
    const [energy, setEnergy] = useState(() => {
        const savedEnergy = localStorage.getItem('energy');
        const parse = savedEnergy ? JSON.parse(savedEnergy) : 100;
        return Math.min(parse, 100);

    });
    const [happiness, setHappiness] = useState(() => {
        const savedHappiness = localStorage.getItem('happiness');
        const parse = savedHappiness ? JSON.parse(savedHappiness) : 100;
        return Math.min(parse, 100);

    });
    const [health, setHealth] = useState(() => {
        const savedHealth = localStorage.getItem('health');
        const parse = savedHealth ? JSON.parse(savedHealth) : 100;
        return Math.min(parse, 100);
    });

    useEffect(() => {
        localStorage.setItem('energy', JSON.stringify(energy));
    }, [energy]);

    useEffect(() => {
        localStorage.setItem('happiness', JSON.stringify(happiness));
    }, [happiness]);

    useEffect(() => {
        localStorage.setItem('health', JSON.stringify(health));
    }, [health]);

    const feedPet = (energyBoost = 20, happinessBoost = 15, healthBoost = 10) => {
        setEnergy(prev => Math.min(100, prev + energyBoost));
        setHappiness(prev => Math.min(100, prev + happinessBoost));
        setHealth(prev => Math.min(100, prev + healthBoost));
    };

    return (
        <PetContext.Provider value={{
            energy, setEnergy,
            happiness, setHappiness,
            health, setHealth,
            feedPet,
        }}>
            {children}
        </PetContext.Provider>
    );
}
export const usePet = () => {
    return useContext(PetContext);
}
