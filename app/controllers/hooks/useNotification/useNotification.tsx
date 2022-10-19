import { atom, useRecoilState } from 'recoil';

const notificationState = atom({
    key: 'notificationState',
    default: {
        isOpen: false,
        message: 'WTFMVMT!',
        duration: 5000
    },
});

const useNotification = () => {
    const [notification, setNotification] = useRecoilState(notificationState);


    const closeNotification = () => {
        setNotification({
            ...notification,
            isOpen: false,
        });
    }

    const toggleNotification = () => {
        setNotification({
            ...notification,
            isOpen: !notification.isOpen,
        });
    }

    const sendNotification = ({ message, duration }) => {

        setNotification({
            isOpen: true,
            message: message,
            duration: duration ?? 5000
        });

    }

    return { notification, sendNotification, toggleNotification, closeNotification };

}

export default useNotification
