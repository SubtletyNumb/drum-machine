import './style-sheets/App.css';
import DrumMachine from './Components/DrumMachine';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playDrumPadBtnAnim, playSound } from './Features/drumMachineSlice/drumMachineSlice';

function App() {
  const { keyboardPadButtons } = useSelector(store => store.drumMachine)
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    dispatch(playDrumPadBtnAnim({key: event.key.toUpperCase()}))
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])
  return (
    <div className="App">
     <main className='main-container'>
      <DrumMachine drumPadButtons={keyboardPadButtons}/>
     </main>
    </div>
  );
}

export default App;
