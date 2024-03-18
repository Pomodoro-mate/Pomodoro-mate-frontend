import { Step } from '@/types/study-room.types';
import { useState } from 'react';

const useStepStatus = (initialStepStatus: Step) => {
  const [stepStatus, setStepStatus] = useState(initialStepStatus);
  const changeStepStatus = (step: Step) => setStepStatus(step);

  return { stepStatus, changeStepStatus };
};

export default useStepStatus;
