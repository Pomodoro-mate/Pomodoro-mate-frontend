import { useContext } from 'react';
import { ExitRoomModalContext } from '../provider/exit-room-modal-provier';

const useExitRoomModalContext = () => {
  const context = useContext(ExitRoomModalContext);
  if (!context) {
    throw new Error('ExitRoomModalProvider 하위에서만 사용해주세요!');
  }
  return context;
};

export default useExitRoomModalContext;
