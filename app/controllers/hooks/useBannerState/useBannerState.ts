import {
    atom,
    useRecoilState,
  } from 'recoil';
  
  const bannerState = atom({
    key: 'bannerState', 
    default: true, 
  });

  const useBannerState = () => {

    const [open, setOpen] = useRecoilState(bannerState);

    const toggleBanner = () => {
      setOpen(!open);
    };

    return { open, toggleBanner };
  }

  
  export { bannerState }

  export default useBannerState
