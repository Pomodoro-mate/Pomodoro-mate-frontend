import { STEP_STATUS } from '@/constant/step';
import { Step } from '@/types/study-room.types';

export const getNextStudyStep = (step: Step) => {
  const nextStep = {
    [STEP_STATUS.PLANNING]: STEP_STATUS.STUDYING,
    [STEP_STATUS.STUDYING]: STEP_STATUS.RETROSPECT,
    [STEP_STATUS.RETROSPECT]: STEP_STATUS.RESTING,
    [STEP_STATUS.RESTING]: STEP_STATUS.COMPLETED,
    [STEP_STATUS.COMPLETED]: STEP_STATUS.PLANNING,
  };
  return nextStep[step];
};
