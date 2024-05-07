import { useBlocker, useNavigate } from 'react-router-dom';

import { participantIdStorage } from '@/utils/storage';

import { ROUTE_PATH } from '@/constant/routes';
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

  const exitStudyRoomAction = () => {
    close();
    participantIdStorage.clear();

    navigate(ROUTE_PATH.STUDY_ROOMS);
  };

  const { mutate: exitStudyRoomMutate } = useExitStudyRoomMutation({ exitStudyRoomAction });

  const exitStudyRoom = () => {
    const participantId = participantIdStorage.getItem();
    exitStudyRoomMutate({ studyRoomId: studyId, participantId: Number(participantId) });
  };

  return { exitStudyRoom };
};
export default useExitStudyRoom;
