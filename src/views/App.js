import React, { useState, useRef, useEffect } from 'react';
import '../styles/App.css';
import Home from './Home';
import { SettingButton, PetState } from '../components';
import '../components/Pet/Pet.js';
import '../styles/Button.css';
import '../styles/PetState.css';

function App() {
  return (
    <div className="App">
      <Home />
      <PetState />
      <SettingButton/>
    </div>
  );
}

export default App;