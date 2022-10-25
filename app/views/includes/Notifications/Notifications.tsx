import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import useNotification from '@hooks/useNotification';
import type { IComponent } from '@models/typings/Component';

const Notifications: IComponent<any> = () => {

    const { closeNotification, notification: { message, isOpen, duration } } = useNotification();

    const action = (
        <div>

            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={closeNotification}
            >
                <CloseIcon />
            </IconButton>
        </div>
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
                        color: 'white',
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