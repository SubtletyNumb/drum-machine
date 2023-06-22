import { useEffect } from 'react';
import '../style-sheets/DrumMachine.css'
import DrumPadBtn from './DrumPadBtn';
import { useDispatch, useSelector } from 'react-redux';
import { setSoundVolume } from '../Features/drumMachineSlice/drumMachineSlice';
const DrumMachine = ({drumPadButtons}) => {
const { displayText } = useSelector((store) => store.drumMachine)
const dispatch = useDispatch();

  return (
    <div id="drum-machine">
      <div className='top-block'>
      <div id="display">
        <p>{displayText}</p>
      </div>
      <div className='right-panel'>
      <input className={'volume-bar'} defaultValue={100} onChange={(event) => dispatch(setSoundVolume(event.currentTarget.value))}type='range'>
      </input>
      </div>
      </div>
      <div id="drum-pad-container">
        {drumPadButtons.map(btn => {
          return <DrumPadBtn key={btn.keyboardShortCut} keyboardShortCut={btn.keyboardShortCut} playAnim={btn.playAnim} sound={btn.sound} soundSrc={btn.soundSrc}/>
        })}
    </div>
    </div>
  )
}
export default DrumMachine;