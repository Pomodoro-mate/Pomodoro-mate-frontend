import { useBlocker } from 'react-router-dom';

import { getLocalStorage } from '@/utils/storage';

import useExitStudyRoomMutation from './useExitStudyRoomMutation';

const useExitStudyRoom = (studyId: number) => {
  const { mutate } = useExitStudyRoomMutation();
  const { state, proceed } = useBlocker(
    ({ currentLocation, nextLocation }) => currentLocation.pathname !== nextLocation.pathname,
  );

  const exitStudyRoom = () => {
    if (state !== 'blocked') return;

    const participantId = getLocalStorage('participantId');
    mutate(
      { studyRoomId: studyId, participantId: Number(participantId) },
      { onSuccess: () => proceed() },
    );
  };

  return { exitStudyRoom };
};
export default useExitStudyRoom;
