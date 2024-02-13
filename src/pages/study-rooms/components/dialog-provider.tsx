import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Modal from '@/components/Modal';
import { ReactNode, createContext, useState } from 'react';

export const DialogContext = createContext({ handleDialog() {} });

const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialog = () => setIsOpen(!isOpen);

  return (
    <DialogContext.Provider value={{ handleDialog }}>
      {children}
      {isOpen && <Modal open={isOpen} handleDialog={handleDialog} />}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
