import useSockJSContext from '../hooks/useSockJSContext';

import { Button } from '@/components/ui';
import { Step } from '@/types/study-room.types';

interface NextStepButtonProps {
  step: Step;
}

const NextStepButton = ({ step }: NextStepButtonProps) => {
  const { goToNextStep } = useSockJSContext();

  const onClick = () => {
    goToNextStep(step);
  };

  return (
    <Button type="button" onClick={onClick} className="rounded-full py-1 px-3">
      다음 단계로
    </Button>
  );
};

export default NextStepButton;
