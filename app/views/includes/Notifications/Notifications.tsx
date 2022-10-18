import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Notifications = ({ message, duration, isOpen }) => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <div>
            <Button color="secondary" size="small" onClick={handleClose}>
                Where are you?
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </div>
    );

    return (
        <div>
            <Snackbar
                open={open}
                classes="bg-transparent"
                sx={{
                    backgroundColor: 'transparent',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                autoHideDuration={60000}
                onClose={handleClose}
                message={message ?? "MESSAGE_NOT_FOUND"}
                action={action}
            />
        </div>
    );
}

export default Notifications