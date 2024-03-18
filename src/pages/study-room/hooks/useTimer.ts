import { useRef, useState } from 'react';
import useStepStatus from './useStepStatus';
// import { getNextStudyStep } from '../util/studyStep';
import useAudio from './useAudio';
import { Step } from '@/types/study-room.types';
import { getNextStudyStep } from '../util/studyStep';

interface UseTimer {
  updateAt: string;
  step: Step;
}

const DELAY = 1000;
const STUDY_TIME = 1500;

const useTimer = ({ updateAt, step }: UseTimer) => {
  const { stepStatus, changeStepStatus } = useStepStatus(step);
  const { play } = useAudio();
  const [seconds, setSeconds] = useState(STUDY_TIME);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startRef = useRef(new Date(updateAt).getTime());
  const timeRef = useRef(STUDY_TIME); //25 분

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
      //

      /** 스터디 정보 업데이트 API
       *
       * const data = studyStepMutation.mutate({ studyId: 1, step });
       *
       */
    }, DELAY);
  };

  const reset = () => {
    setSeconds(STUDY_TIME);
    const step = getNextStudyStep(stepStatus);
    changeStepStatus(step);
    clearInterval(intervalRef.current as NodeJS.Timeout);
    timeRef.current = STUDY_TIME;
  };

  return { seconds, startTimer, stepStatus };
};

export default useTimer;
