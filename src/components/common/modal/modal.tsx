import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  actionBtn?: string;
  closeBtn?: string;
  onClickActionBtn?: () => void;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  actionBtn,
  closeBtn,
  onClickActionBtn,
  children,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{closeBtn ?? '닫기'}</Button>
        {actionBtn && (
          <Button variant="contained" onClick={onClickActionBtn}>
            {actionBtn}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
