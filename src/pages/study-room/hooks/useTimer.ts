import { useRef, useState } from 'react';
import useAudio from './useAudio';
import useStepStatus from './useStepStatus';

import { Step } from '@/types/study-room.types';

interface UseTimer {
  updateAt: string;
  step: Step;
}

const DELAY = 1000;
const STUDY_TIME = 2100; //35분

const useTimer = ({ updateAt, step }: UseTimer) => {
  const { play } = useAudio();
  const { stepStatus } = useStepStatus(step);
  const [seconds, setSeconds] = useState(STUDY_TIME);

  const timeRef = useRef(STUDY_TIME);
  const startRef = useRef(new Date(updateAt).getTime());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      const difference = Math.floor((Date.now() - startRef.current) / 1000);
      const remainingSeconds = timeRef.current - difference;

      if (remainingSeconds > 0) {
        setSeconds(remainingSeconds);
        return;
      }

      play();
      reset();
    }, DELAY);
  };

  const reset = () => {
    setSeconds(STUDY_TIME);
    clearInterval(intervalRef.current as NodeJS.Timeout);
    timeRef.current = STUDY_TIME;
  };

  return { seconds, startTimer, stepStatus };
};

export default useTimer;
