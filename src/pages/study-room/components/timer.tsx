import { useEffect } from 'react';
import { Button, Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { StepInfo } from '@/types/study-room.types';
import useStepInfo from '../hooks/useStepInfo';
import useSockJSContext from '../hooks/useSockJSContext';

const Timer = (stepInfo: StepInfo) => {
  const { goToNextStep } = useSockJSContext();

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
      <Button
        size="large"
        type="button"
        variant="contained"
        onClick={() => goToNextStep(stepInfo.step)}
      >
        &nbsp; NEXT STEP <KeyboardArrowRightIcon />
      </Button>
    </Container>
  );
};

export default Timer;
