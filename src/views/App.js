import '../styles/App.css';
import Home from './Home';
import {SettingButton , PetState, Pet} from '../components';
import '../components/Pet/Pet.js';
import '../styles/Button.css'
import '../styles/PetState.css'

function App() {
  return (
    <div className="App">
      <Home/>
      <PetState/>
      {/* <Button3D/> */}
      <SettingButton/>
      <Pet/>
    </div>
  );
}

export default App;