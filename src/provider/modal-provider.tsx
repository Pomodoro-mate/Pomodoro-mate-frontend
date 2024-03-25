import { PropsWithChildren, createContext, useState } from 'react';
import { ModalKey } from '@/types/modal.types';
import Modals from '@/components/common/modal/modals';

interface ModalContextType {
  openedModalKeys: ModalKey[];
  setOpenedModalKeys: React.Dispatch<React.SetStateAction<ModalKey[]>>;
  openDialog: (newModalKey: ModalKey) => void;
  closeDialog: (targetModalKey: ModalKey) => void;
}

export const ModalContext = createContext<ModalContextType>({
  openedModalKeys: [],
  setOpenedModalKeys: () => {},
  openDialog: () => {},
  closeDialog: () => {},
});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [openedModalKeys, setOpenedModalKeys] = useState<ModalKey[]>([]);

  const openDialog = (newModalKey: ModalKey) => {
    setOpenedModalKeys((modalKeys) => [...modalKeys, newModalKey]);
  };

  const closeDialog = (targetModalKey: ModalKey) => {
    setOpenedModalKeys((modalKeys) => modalKeys.filter((modalKey) => modalKey !== targetModalKey));
  };

  return (
    <ModalContext.Provider value={{ openedModalKeys, setOpenedModalKeys, openDialog, closeDialog }}>
      {children}
      <Modals />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
