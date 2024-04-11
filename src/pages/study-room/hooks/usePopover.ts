import { useCallback, useState } from 'react';

export interface UsePopover {
  anchorEl: HTMLButtonElement | null;
  openPopover: () => void;
  closePopover: () => void;
}

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState<UsePopover['anchorEl']>(null);

  const openPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closePopover = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return {
    anchorEl,
    openPopover,
    closePopover,
  };
};

export default usePopover;
