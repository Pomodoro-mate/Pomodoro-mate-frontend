import { screen } from '@testing-library/react';
import { render } from '@/test-helper';
import fixtures from '@/fixtures';
import StepTimeSelectFields from './step-time-select-fields';

const context = describe;

const { studyRoom } = fixtures;

const stepTimeSelectFieldsProps = {
  timeSet: studyRoom.timeSet,
  onChangeSelect: jest.fn(),
};

describe('StepTimeSelectFields', () => {
  it('render StepTimeSelectFields', () => {
    render(<StepTimeSelectFields {...stepTimeSelectFieldsProps} />);

    screen.getByLabelText(/계획/);
    screen.getByLabelText(/스터디/);
  });

  context('when select changes', () => {
    it('execute handler function', () => {
      // TODO: UI 라이브러리 변경 후 추가 예정
      // const { onChangeSelect } = stepTimeSelectFieldsProps;
      // render(<StepTimeSelectFields {...stepTimeSelectFieldsProps} />);
      // const selectElement = screen.getByRole('combobox', { name: /회고/ });
      // userEvent.selectOptions(selectElement, screen.getByRole('option', { name: '5분' }));
      // expect(onChangeSelect).toHaveBeenCalled();
    });
  });
});
