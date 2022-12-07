import useModal from '@controllers/hooks/useModal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import SearchBar from '@views/components/SearchBar';

<<<<<<< HEAD
const Modal = () => {
    const { open, toggleModal } = useModal()
=======
export default function Modal() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
>>>>>>> parent of f0f3051... [ Last known good build ]!


    return (
<<<<<<< HEAD
        <Dialog PaperProps={{
            sx: { bgColor: 'black' }
        }}
            open={open} onClose={toggleModal}>

            <div className="bg-black bg-opacity-50 backdrop-blur-md">
                <DialogTitle><span className='text-slate-200 font-major'>Search</span></DialogTitle>
                <DialogContent >

                    <SearchBar />
                </DialogContent>


                <DialogActions>
                    <Button onClick={toggleModal}>Cancel</Button>
                    <Button onClick={toggleModal}>Subscribe</Button>
                </DialogActions>
            </div>
=======
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent >
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
>>>>>>> parent of f0f3051... [ Last known good build ]!
        </Dialog>
    );
}

export default Modal