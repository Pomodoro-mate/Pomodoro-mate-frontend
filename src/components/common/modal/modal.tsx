/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: (modalKey: any) => void;
  title: string;
  actionBtn?: string;
  closeBtn?: string;
  onClickActionBtn?: (...args: any) => any;
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
