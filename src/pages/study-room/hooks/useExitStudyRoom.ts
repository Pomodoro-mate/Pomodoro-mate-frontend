import { useBlocker } from 'react-router-dom';

import { getLocalStorage } from '@/utils/storage';

import useExitStudyRoomMutation from './useExitStudyRoomMutation';

const useExitStudyRoom = (studyId: string) => {
  const { mutate } = useExitStudyRoomMutation();
  const { state, proceed } = useBlocker(
    ({ currentLocation, nextLocation }) => currentLocation.pathname !== nextLocation.pathname,
  );

  const exitStudyRoom = () => {
    if (state !== 'blocked') return;

    const participantId = getLocalStorage('participantId');
    mutate({ studyRoomId: Number(studyId), participantId: Number(participantId) });
    proceed();
  };

  return { exitStudyRoom };
};
export default useExitStudyRoom;
