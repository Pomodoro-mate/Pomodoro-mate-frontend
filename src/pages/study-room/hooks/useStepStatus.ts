import { Step } from '@/types/study-room.types';
import { useEffect, useState } from 'react';

const useStepStatus = (initialStepStatus: Step) => {
  const [stepStatus, setStepStatus] = useState(initialStepStatus);
  useEffect(() => {
    setStepStatus(initialStepStatus);
  }, [initialStepStatus]);

  return { stepStatus };
};

export default useStepStatus;
