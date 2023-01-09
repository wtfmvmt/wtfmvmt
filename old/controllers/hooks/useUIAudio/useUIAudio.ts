import {
    atom,
    useRecoilState,
  } from 'recoil';
  
  const uiAudioState = atom({
    key: 'uiAudioState', 
    default: {
        playing: false
    }, 
  });

  const useUIAudio = () => {

    const [open, setOpen] = useRecoilState(uiAudioState);



    return { open };
  }

  
  export { uiAudioState }

  export default useUIAudio
