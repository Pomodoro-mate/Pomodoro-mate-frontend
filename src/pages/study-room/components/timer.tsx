import { useEffect } from 'react';

import { Button, Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { StepInfo } from '@/types/study-room.types';

import useAudio from '../hooks/useAudio';
import useStepInfo from '../hooks/useStepInfo';
import useSockJSContext from '../hooks/useSockJSContext';

import finishSound from '../../../assets/audio/finish.mp3';

const Timer = (stepInfo: StepInfo) => {
  const { goToNextStep } = useSockJSContext();

  const { stepLabel, currentTime } = useStepInfo(stepInfo);

  const { play, setSound } = useAudio();
  const playSound = () => {
    setSound(finishSound);
    play();
  };

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
      <Button
        size="large"
        type="button"
        variant="contained"
        onClick={() => {
          goToNextStep(stepInfo.step);
          playSound();
        }}
      >
        &nbsp; NEXT STEP <KeyboardArrowRightIcon />
      </Button>
    </Container>
  );
};

export default Timer;
