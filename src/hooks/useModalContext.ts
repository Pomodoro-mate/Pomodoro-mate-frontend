import { useContext } from 'react';

import { ModalContext } from '@/provider/modal-provider';

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Cannot find ModalProvider');
  }

  return context;
};

export default useModalContext;
