import { fireEvent, screen } from '@testing-library/react';
import { render } from '@/test-helper';
import { STUDY_ROOM_STEP } from '@/constant/study-room';
import { StepInfo } from '@/types/study-room.types';
import Timer from './timer';

const context = describe;

const mockStepInfo: StepInfo = {
  step: 'PLANNING',
  progressTime: 10,
  updateAt: '2024-03-27T05:47:11.638Z',
};

const mockUseTimer = {
  remainingSeconds: 10 * 60,
};

const mockUseSockJSContext = {
  goToNextStep: jest.fn(),
};

jest.mock('../hooks/useTimer', () => () => mockUseTimer);

jest.mock('../hooks/useSockJSContext', () => () => mockUseSockJSContext);

describe('Timer', () => {
  it('renders timer', () => {
    render(<Timer {...mockStepInfo} />);

    screen.getByText(`${STUDY_ROOM_STEP[mockStepInfo.step]} 단계`);
    screen.getByText('10:00');
  });

  context('when click next step button', () => {
    it('execute goToNextStep function', () => {
      render(<Timer {...mockStepInfo} />);

      const button = screen.getByRole('button', { name: /NEXT STEP/ });

      fireEvent.click(button);

      expect(mockUseSockJSContext.goToNextStep).toHaveBeenCalled();
    });
  });
});
