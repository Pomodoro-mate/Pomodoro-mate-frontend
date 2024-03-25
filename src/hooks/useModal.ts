import { ModalKey } from '@/types/modal.types';
import useModalContext from '@/hooks/useModalContext';

const useModal = (modalKey: ModalKey) => {
  const { openedModalKeys, openDialog, closeDialog } = useModalContext();

  const isOpen = openedModalKeys.includes(modalKey);

  const onOpen = () => {
    openDialog(modalKey);
  };

  const onClose = () => {
    closeDialog(modalKey);
  };

  return { isOpen, onOpen, onClose };
};

export default useModal;
