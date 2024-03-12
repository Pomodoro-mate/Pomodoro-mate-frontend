import { useState } from 'react';

const useStepStatus = (stepStatus: string) => {
  const [status, setStatus] = useState(stepStatus);
  const changeStepStatus = (step: string) => setStatus(step);

  return { status, changeStepStatus };
};

export default useStepStatus;
