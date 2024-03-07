import { useMemo, useRef, useState } from 'react';

import { STEP } from '@/constant/step';

const DELAY = 1000;
// const REST_TIME = 300;
// const RETROSPECT_TIME = 300;
// const STUDY_TIME = 1500;
// const PLANNING = 300;

const useTimer = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(3);

  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState(STEP.PLANNING);

  const timeRef = useRef(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // const { studyStepMutation } = useStudyStep();

  const startTimer = () => {
    // studyStepMutation.mutate({ studyId: 1, step: STEP.STUDYING });
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      if (timeRef.current === 0) {
        setIsActive(false);
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setStatus(STEP.RESTING);
      }
      if (timeRef.current > 0) {
        timeRef.current -= 1;
        setMin(Math.floor(timeRef.current / 60));
        setSec(timeRef.current % 60);
      }
    }, DELAY);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setIsActive(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setIsActive(false);
  };

  const currentTime = useMemo(() => {
    const currentMinutes = min < 10 ? `0${min}` : min;
    const currentSeconds = sec < 10 ? `0${sec}` : sec;
    return `${currentMinutes} : ${currentSeconds}`;
  }, [min, sec]);

  return { startTimer, stopTimer, resetTimer, isActive, status, currentTime };
};
export default useTimer;
