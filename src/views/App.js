import logo from '../assets/logo.svg';
import '../styles/App.css';
import Home from './Home';
import {Button3D , SettingButton ,PetState} from '../components';

import '../styles/Button.css'
import '../styles/PetState.css'

function App() {
  return (
    <div className="App">
      <Home/>
      <PetState/>
      {/* <Button3D/> */}
      <SettingButton/>
    </div>
  );
}

export default App;
