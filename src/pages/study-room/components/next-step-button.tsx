import useSockJSContext from '../hooks/useSockJSContext';
import useAudio from '../hooks/useAudio';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Step } from '@/types/study-room.types';

interface SoundClickProps {
  sound: string;
  step: Step;
}

const NextStepButton = ({ sound, step }: SoundClickProps) => {
  const { goToNextStep } = useSockJSContext();

  const { play } = useAudio({ initialSound: sound });

  return (
    <Button
      size="large"
      type="button"
      variant="contained"
      onClick={() => {
        goToNextStep(step);
        play();
      }}
    >
      &nbsp; NEXT STEP <KeyboardArrowRightIcon />
    </Button>
  );
};

export default NextStepButton;
