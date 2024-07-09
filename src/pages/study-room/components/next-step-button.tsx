import useSockJSContext from '../hooks/useSockJSContext';
import useAudio from '../hooks/useAudio';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Step } from '@/types/study-room.types';

interface NextStepButtonProps {
  sound: string;
  step: Step;
}

const NextStepButton = ({ sound, step }: NextStepButtonProps) => {
  const { goToNextStep } = useSockJSContext();

  const { play } = useAudio({ initialSound: sound });

  const onClick = () => {
    goToNextStep(step);
    play();
  };

  return (
    <Button size="large" type="button" variant="contained" onClick={onClick}>
      &nbsp; NEXT STEP <KeyboardArrowRightIcon />
    </Button>
  );
};

export default NextStepButton;
