import { useBlocker, useNavigate } from 'react-router-dom';

import { getLocalStorage } from '@/utils/storage';

import useExitStudyRoomMutation from './useExitStudyRoomMutation';

interface UseExitStudyRoom {
  studyId: number;
  close: () => void;
}

const useExitStudyRoom = ({ studyId, close }: UseExitStudyRoom) => {
  const navigate = useNavigate();
  useBlocker(({ currentLocation, nextLocation, historyAction }) => {
    if (historyAction === 'POP') {
      return currentLocation.pathname !== nextLocation.pathname;
    }
    return currentLocation.pathname === nextLocation.pathname;
  });

  const { mutate: exitStudyRoomMutate } = useExitStudyRoomMutation({
    close,
    navigate,
  });

  const exitStudyRoom = () => {
    const participantId = getLocalStorage('participantId');
    exitStudyRoomMutate({ studyRoomId: studyId, participantId: Number(participantId) });
  };

  return { exitStudyRoom };
};
export default useExitStudyRoom;
