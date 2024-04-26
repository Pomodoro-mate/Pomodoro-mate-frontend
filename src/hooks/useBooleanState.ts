import { useState } from 'react';

const useBooleanState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);

  const closeDialog = () => setIsOpen(false);

  return [isOpen, openDialog, closeDialog] as const;
};

export default useBooleanState;
