import {
    atom,
    useRecoilState,
} from 'recoil';

const modalState = atom({
    key: 'modalState',
    default: false,
});

const useModal = () => {
    const [open, setOpen] = useRecoilState(modalState);

    const toggleModal = () => { 
        setOpen(!open);
    }

    
    const setModal = () => { 
        setOpen(!open);
    }

    return { toggleModal, setModal, open }
}

export default useModal