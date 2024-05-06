import { fireEvent, screen } from '@testing-library/react';
import { render } from '@/test-helper';
import { STUDY_ROOM_STEP } from '@/constant/study-room';
import fixtures from '@/fixtures';
import Timer from './timer';

const context = describe;

const {
  studyRoom: { step, timeSet, updateAt },
} = fixtures;

const mockUseStepInfo = {
  stepLabel: '계획',
  currentTime: '10:00',
};

const mockUseSockJSContext = {
  goToNextStep: jest.fn(),
};

jest.mock('../hooks/useStepInfo', () => () => mockUseStepInfo);

jest.mock('../hooks/useSockJSContext', () => () => mockUseSockJSContext);

const renderTimer = () =>
  render(<Timer step={step} progressTime={timeSet.studyingTime} updateAt={updateAt} />);

describe('Timer', () => {
  it('renders timer', () => {
    renderTimer();

    screen.getByText(`${STUDY_ROOM_STEP[step]} 단계`);
    screen.getByText(mockUseStepInfo.currentTime);
  });

  context('when click next step button', () => {
    it('execute goToNextStep function', () => {
      renderTimer();

      const button = screen.getByRole('button', { name: /NEXT STEP/ });

      fireEvent.click(button);

      expect(mockUseSockJSContext.goToNextStep).toHaveBeenCalled();
    });
  });
});
