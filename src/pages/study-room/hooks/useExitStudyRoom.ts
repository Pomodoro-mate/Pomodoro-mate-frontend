import { useBlocker, useNavigate } from 'react-router-dom';

import { getLocalStorage, removeLocalStorage } from '@/utils/storage';

import useExitStudyRoomMutation from './useExitStudyRoomMutation';
import { ROUTE_PATH } from '@/constant/routes';

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

  const exitStudyRoomAction = () => {
    close();
    removeLocalStorage('participantId');
    navigate(ROUTE_PATH.STUDY_ROOMS);
  };

  const { mutate: exitStudyRoomMutate } = useExitStudyRoomMutation({ exitStudyRoomAction });

  const exitStudyRoom = () => {
    const participantId = getLocalStorage('participantId');
    exitStudyRoomMutate({ studyRoomId: studyId, participantId: Number(participantId) });
  };

  return { exitStudyRoom };
};
export default useExitStudyRoom;
