import { useDispatch, useSelector } from 'react-redux';
import { playDrumPadBtnAnim, stopAnim } from '../Features/drumMachineSlice/drumMachineSlice';
import { useEffect, useState } from 'react';

const DrumPadBtn = ({keyboardShortCut, playAnim, sound, soundSrc}) => {
  const dispatch = useDispatch();
  const {soundVolume} = useSelector((store) => store.drumMachine);
  const [volume, setVolume] = useState(0.5);
  const handleClic = (event) => {
    let audio = document.getElementById(event.target.innerText);
    if(!audio) return;
    dispatch(playDrumPadBtnAnim({key: event.target.innerText}))
    audio.play()
    }
  return(
    <div id={sound} onAnimationEnd={() => dispatch(stopAnim(keyboardShortCut))} onClick={(event)=>handleClic(event)}className={playAnim ? `drum-pad play-anim` : `drum-pad`}>
      {keyboardShortCut}
      {/* <button id={sound} onAnimationEnd={() => dispatch(stopAnim(keyboardShortCut))} onClick={(event) => handleClic(event)} className={playAnim ? `drum-pad play-anim` : `drum-pad`}>{keyboardShortCut}</button> */}
      <audio className='clip' id={keyboardShortCut} src={soundSrc}></audio>
    </div>
  
  )
}
export default DrumPadBtn;