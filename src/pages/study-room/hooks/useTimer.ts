import { useCallback, useEffect, useRef, useState } from 'react';
import useAudio from './useAudio';

import { StepInfo } from '@/types/study-room.types';

const DELAY = 1000;

const useTimer = ({ step, progressTime, updateAt }: StepInfo) => {
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  const { play } = useAudio();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const calcRemainingSeconds = useCallback(
    (endTime: number) => Math.ceil((endTime - Date.now()) / 1000),
    [],
  );

  useEffect(() => {
    const startTime = new Date(updateAt).getTime();
    const endTime = startTime + progressTime * 1000 * 60;

    const remainingTime = calcRemainingSeconds(endTime);

    if (remainingTime > 0) {
      setRemainingSeconds(remainingTime);

      intervalRef.current = setInterval(() => {
        const updatedRemainingTime = calcRemainingSeconds(endTime);

        if (updatedRemainingTime >= 0) {
          setRemainingSeconds(updatedRemainingTime);

          return;
        }

        play();

        clearTimer();
      }, DELAY);
    }

    return () => clearTimer();
  }, [step, progressTime, updateAt, calcRemainingSeconds, play]);

  const clearTimer = () => clearInterval(intervalRef.current as NodeJS.Timeout);

  return { remainingSeconds };
};

export default useTimer;
