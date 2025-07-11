import React, { createContext, useContext, useState, useEffect } from 'react';

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
    const [energy, setEnergy] = useState(() => {
        const savedEnergy = localStorage.getItem('energy');
        return savedEnergy ? JSON.parse(savedEnergy) : 100;

    });
    const [happiness, setHappiness] = useState(() => {
        const savedHappiness = localStorage.getItem('happiness');
        return savedHappiness ? JSON.parse(savedHappiness) : 100;
    });
    const [health, setHealth] = useState(() => {
        const savedHealth = localStorage.getItem('health');
        return savedHealth ? JSON.parse(savedHealth) : 100;
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

    return (
        <PetContext.Provider value={{
            energy, setEnergy,
            happiness, setHappiness,
            health, setHealth,
        }}>
            {children}
        </PetContext.Provider>
    );
}
export const usePet = () => {
    return useContext(PetContext);
}
