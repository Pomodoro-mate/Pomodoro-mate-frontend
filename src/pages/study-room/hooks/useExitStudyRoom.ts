import { useBlocker, useNavigate } from 'react-router-dom';

import { getLocalStorage } from '@/utils/storage';

import useExitStudyRoomMutation from './useExitStudyRoomMutation';

interface UseExitStudyRoom {
  studyId: number;
  close: () => void;
}

const useExitStudyRoom = ({ studyId, close }: UseExitStudyRoom) => {
  const navigate = useNavigate();
  const { state: blockState, proceed } = useBlocker(
    ({ currentLocation, nextLocation }) => currentLocation.pathname !== nextLocation.pathname,
  );

  const { mutate: exitStudyRoomMutate } = useExitStudyRoomMutation({ proceed, close, navigate });

  const exitStudyRoom = () => {
    if (blockState !== 'blocked') return;

    const participantId = getLocalStorage('participantId');
    exitStudyRoomMutate({ studyRoomId: studyId, participantId: Number(participantId) });
  };

  return { exitStudyRoom };
};
export default useExitStudyRoom;
