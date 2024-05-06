import { useEffect, useMemo } from 'react';
import { Button, Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { STUDY_ROOM_STEP } from '@/constant/study-room';
import { StepInfo } from '@/types/study-room.types';
import useTimer from '../hooks/useTimer';
import useSockJSContext from '../hooks/useSockJSContext';

const Timer = (stepInfo: StepInfo) => {
  const { goToNextStep } = useSockJSContext();

  const { remainingSeconds } = useTimer(stepInfo);

  const { step } = stepInfo;

  const stepLabel = useMemo(() => STUDY_ROOM_STEP[step], [step]);

  const currentTime = useMemo(() => {
    const 분 = Math.floor(remainingSeconds / 60);
    const 초 = remainingSeconds % 60;

    return `${String(분).padStart(2, '0')}:${String(초).padStart(2, '0')}`;
  }, [remainingSeconds]);

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
      <Button size="large" type="button" variant="contained" onClick={() => goToNextStep(step)}>
        &nbsp; NEXT STEP <KeyboardArrowRightIcon />
      </Button>
    </Container>
  );
};

export default Timer;
