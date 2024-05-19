import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { STUDY_ROOM_STEP } from '@/constant/study-room';
import { StepInfo } from '@/types/study-room.types';
import useAudio from './useAudio';

import startSound from '../../../assets/audio/start.mp3';

const DELAY = 1000;

const useStepInfo = ({ step, progressTime, updateAt }: StepInfo) => {
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  const { play, setSound } = useAudio();

  const playSound = () => {
    setSound(startSound);
    play();
  };

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stepLabel = useMemo(() => STUDY_ROOM_STEP[step], [step]);

  const calcRemainingSeconds = useCallback(
    (endTime: number) => Math.ceil((endTime - Date.now()) / 1000),
    [],
  );

  const currentTime = useMemo(() => {
    const 분 = Math.floor(remainingSeconds / 60);
    const 초 = remainingSeconds % 60;

    return `${String(분).padStart(2, '0')}:${String(초).padStart(2, '0')}`;
  }, [remainingSeconds]);

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
        playSound();

        clearTimer();
      }, DELAY);
    }

    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, progressTime, updateAt, calcRemainingSeconds]);

  const clearTimer = () => clearInterval(intervalRef.current as NodeJS.Timeout);

  return { stepLabel, currentTime };
};

export default useStepInfo;
