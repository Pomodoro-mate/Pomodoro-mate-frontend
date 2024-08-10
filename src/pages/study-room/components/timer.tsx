import { useEffect } from 'react';

import { StepInfo } from '@/types/study-room.types';

import useAudio from '../hooks/useAudio';
import useStepInfo from '../hooks/useStepInfo';

import endSound from '@/assets/audio/study-end.mp3';
import NextStepButton from './next-step-button';

import { Book, Bulb, Headset, Receipt } from '@/components/icons';

const Timer = (stepInfo: StepInfo) => {
  const { stepLabel, currentTime } = useStepInfo(stepInfo);
  const { play } = useAudio({ initialSound: endSound });

  useEffect(
    function setDocumentTitle() {
      document.title = `${currentTime} - ${stepLabel} 단계`;
    },
    [currentTime, stepLabel],
  );

  useEffect(() => {
    if (stepInfo.step !== 'WAITING') {
      play();
    }
  }, [stepInfo.step, play]);

  return (
    <div className="flex gap-14">
      <div className="flex flex-col items-center gap-3">
        {stepInfo.step === 'STUDYING' && <Book width={59} height={52} stroke="#333333" />}
        {stepInfo.step === 'RETROSPECT' && <Bulb width={59} height={52} stroke="#333333" />}
        {stepInfo.step === 'PLANNING' && <Receipt width={59} height={52} stroke="#333333" />}
        {stepInfo.step === 'RESTING' && <Headset width={59} height={52} stroke="#333333" />}
        <h2 className="text-2xl font-bold">{stepLabel} 단계</h2>
      </div>
      <div className="border-r" />
      <div className="flex flex-col items-center gap-2">
        <h1>남은 시간</h1>
        <h1 className="font-bold text-2xl">{currentTime}</h1>
        <NextStepButton step={stepInfo.step} />
      </div>
    </div>
  );
};

export default Timer;
