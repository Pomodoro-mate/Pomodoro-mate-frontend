import { useBlocker } from 'react-router-dom';

import { getLocalStorage } from '@/utils/storage';

import useExitStudyRoomMutation from './useExitStudyRoomMutation';

const useExitStudyRoom = (studyId: number) => {
  const { mutate: exitStudyRoomMutate } = useExitStudyRoomMutation();
  const { state: blockState, proceed } = useBlocker(
    ({ currentLocation, nextLocation }) => currentLocation.pathname !== nextLocation.pathname,
  );

  const exitStudyRoom = () => {
    if (blockState !== 'blocked') return;

    const participantId = getLocalStorage('participantId');
    exitStudyRoomMutate(
      { studyRoomId: studyId, participantId: Number(participantId) },
      { onSuccess: () => proceed() },
    );
  };

  return { exitStudyRoom };
};
export default useExitStudyRoom;
