import { STUDY_ROOM_STEP_TO_TIME_SET } from '@/constant/study-room';
import { Step, TimeSet } from '@/types/study-room.types';

const getProgressTime = ({ step, timeSet }: { step: Step; timeSet: TimeSet }) => {
  if (step === 'WAITING' || step === 'COMPLETED') {
    return 0;
  }

  return timeSet[STUDY_ROOM_STEP_TO_TIME_SET[step]];
};

export default getProgressTime;
