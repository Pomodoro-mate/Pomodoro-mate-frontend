import { useCallback, useState } from 'react';

export interface UsePopover {
  anchorEl: HTMLButtonElement | null;
  onOpen: () => void;
  onClose: () => void;
}

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onOpen = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return {
    anchorEl,
    onOpen,
    onClose,
  };
};

export default usePopover;
