import { useCallback, useState } from 'react';

export interface UsePopover {
  anchorEl: HTMLButtonElement | null;
  openPopover: () => void;
  closePopover: () => void;
}

const usePopover = () => {
  // MUI의 Popover Component 속성명에 따른 네이밍 (popover을 트리거하는 button)
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
