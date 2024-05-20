import { useEffect } from 'react';

import { Container } from '@mui/material';

import { StepInfo } from '@/types/study-room.types';

import useStepInfo from '../hooks/useStepInfo';

import endSound from '@/assets/audio/study-end.mp3';
import NextStepButton from './next-step-button';

const Timer = (stepInfo: StepInfo) => {
  const { stepLabel, currentTime } = useStepInfo(stepInfo);

  useEffect(
    function setDocumentTitle() {
      document.title = `${currentTime} - ${stepLabel} 단계`;
    },
    [currentTime, stepLabel],
  );

  return (
    <Container sx={{ minWidth: '50%', textAlign: 'center', paddingBlock: 4 }}>
      <h2>{stepLabel} 단계</h2>
      <h1>{currentTime}</h1>
      <NextStepButton sound={endSound} step={stepInfo.step} />
    </Container>
  );
};

export default Timer;
