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

    return { toggleModal, open }
}

export default useModal