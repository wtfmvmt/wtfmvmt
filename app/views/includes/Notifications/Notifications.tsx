import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import useNotification from '@hooks/useNotification';

const Notifications = () => {

    const { closeNotification, notification: { message, isOpen, duration } } = useNotification();

    const action = (
        <div>
         
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={closeNotification}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </div>
    );

    return (
        <div>
            <Snackbar
                open={isOpen}
                color="secondary"
                onClose={closeNotification}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                autoHideDuration={duration}
                message={message ?? "MESSAGE_NOT_FOUND"}
                action={action}
            />
        </div>
    );
}

export default Notifications