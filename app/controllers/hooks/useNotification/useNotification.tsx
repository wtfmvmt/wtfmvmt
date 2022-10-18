import {
    atom,
    useRecoilState,
} from 'recoil';

const notificationState = atom({
    key: 'notificationState',
    default: {
        isOpen: false,
        message: 'WTFMVMT!',
        duration: 5000
    },
});

const useNotification = () => {

    const [open, setOpen] = useRecoilState(notificationState);

  

}

export default useNotification
