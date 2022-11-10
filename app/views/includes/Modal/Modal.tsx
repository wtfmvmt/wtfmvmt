import useModal from '@controllers/hooks/useModal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import SearchBar from '@views/components/SearchBar';

const Modal = () => {
    const { open, toggleModal } = useModal()


    return (
        <Dialog PaperProps={{
            sx: { bgColor: 'transparent' }
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
        </Dialog>
    );
}

export default Modal