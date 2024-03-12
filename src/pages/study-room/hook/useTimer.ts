import { useRef, useState } from 'react';
import useStepStatus from './useStepStatus';
import { studyStep } from '../util/studyStep';
import useAudio from './useAudio';

interface UseTimeProps {
  updateAt: string;
  step: string;
}

const DELAY = 1000;
const STUDY_TIME = 1500;

const useTimer = ({ updateAt, step }: UseTimeProps) => {
  const { status, changeStepStatus } = useStepStatus(step);
  const { playSound } = useAudio();
  const [seconds, setSeconds] = useState(STUDY_TIME);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startRef = useRef(new Date(updateAt).getTime());
  const timeRef = useRef(STUDY_TIME); //25 분

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      const difference = Math.floor((Date.now() - startRef.current) / 1000);
      const remainingSeconds = timeRef.current - difference;
      if (remainingSeconds <= 0) {
        playSound();
        const step = studyStep(status);

        /** 스터디 정보 업데이트 API
         *
         * const data = studyStepMutation.mutate({ studyId: 1, step });
         *
         */
        changeStepStatus(step);
        clearInterval(intervalRef.current as NodeJS.Timeout);
        timeRef.current = STUDY_TIME;
        setSeconds(STUDY_TIME);
        return;
      }
      if (remainingSeconds > 0) {
        setSeconds(remainingSeconds);
      }
    }, DELAY);
  };

  return { seconds, startTimer, status };
};

export default useTimer;
