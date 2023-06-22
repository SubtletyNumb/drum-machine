import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  displayText: '',
  soundVolume : 1,
  keyboardPadButtons: [{keyboardShortCut: 'Q', playAnim: false, sound: 'Heater-1', soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
   {keyboardShortCut: 'W', playAnim: false, sound: 'Heater-2', soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {keyboardShortCut: 'E', playAnim: false, sound: 'Heater-3', soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
  {keyboardShortCut: 'A', playAnim: false, sound: 'Heater-4', soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
   {keyboardShortCut: 'S', playAnim: false, sound: 'Clap', soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {keyboardShortCut: 'D', playAnim: false, sound: 'Open-HH', soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
   {keyboardShortCut: 'Z', playAnim: false, sound: "Kick-n'-Hat", soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {keyboardShortCut: 'X', playAnim: false, sound: 'Kick', soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
     {keyboardShortCut: 'C', playAnim: false, sound: 'Closed-HH', soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}],

}

const drumMachineSlice = createSlice({
  name: 'drumMachine',
  initialState,
  reducers: {
    playDrumPadBtnAnim: (state, {payload}) => {
      if(state.keyboardPadButtons.some(btn => btn.keyboardShortCut === payload.key)){
        
        state.displayText = state.keyboardPadButtons.filter(btn => btn.keyboardShortCut === payload.key)[0].sound.replace(/-/g, " ");
      }
      state.keyboardPadButtons = state.keyboardPadButtons.map(btn => {
        if(btn.keyboardShortCut === payload.key){
          return ({...btn, playAnim: true})
        }
        return btn;
       })
    },
    stopAnim: (state) => {
      state.keyboardPadButtons = state.keyboardPadButtons.map(btn => {
          return({...btn, playAnim: false})
        }
      )
    },
    setSoundVolume: (state, {payload}) =>{
      if(payload === '100'){
        state.soundVolume = 1;
      }else if(payload < 100 && payload > 10){
        state.soundVolume = Number(`0.${payload.substring(0,1)}`)

      }else if(payload <= 10 && payload > 0){
        state.soundVolume = Number(0.1);
      }else if(payload == 0){
        state.soundVolume = 0;
      }
      state.displayText = 'Volume: ' + payload;
    }
  }
})

export default drumMachineSlice.reducer;
export const {playDrumPadBtnAnim, stopAnim, playSound, setSoundVolume} = drumMachineSlice.actions