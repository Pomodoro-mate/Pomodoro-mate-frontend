import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface ModalProps {
  open: boolean;
  handleDialog: () => void;
}

const Modal = ({ open, handleDialog }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialog}>Disagree</Button>
        <Button onClick={handleDialog} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
