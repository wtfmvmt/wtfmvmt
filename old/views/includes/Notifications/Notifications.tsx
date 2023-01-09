import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import useNotification from '@hooks/useNotification';
import type { ComponentType } from '@models/typings/Component';

const Notifications: ComponentType<any> = () => {

    const { closeNotification, notification: { message, isOpen, duration } } = useNotification();

    const action = (
        <div>

            <IconButton
                size="small"
                aria-label="close-wtfmvmt-notification"
                color="inherit"
                onClick={closeNotification}
            >
                <div className="hover:bg-purple-800 hover:rounded-full duration-500">
                    <CloseIcon />
                </div>
            </IconButton >
        </div >
    );

    return (
        <div className='mb-0'>
            <Snackbar
                open={isOpen}
                color="secondary"
                onClose={closeNotification}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}

                sx={{
                    '& .MuiSnackbarContent-root': {
                        backgroundColor: 'black',
                        opacity: '0.8',
                        color: 'white',
                        fontFamily: 'var(--font-primary)'
                    },
                }}
                autoHideDuration={duration}
                message={message ?? "MESSAGE_NOT_FOUND"}
                action={action}
            />
        </div>
    );
}

export default Notifications