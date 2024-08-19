import { screen } from '@testing-library/react';
import { render } from '@/test-helper';
import fixtures from '@/fixtures';
import StepTimeSelectField from './stpe-time-select-field';

const context = describe;

const { studyRoom } = fixtures;

const stepTimeSelectFieldsProps = {
  timeSet: studyRoom.timeSet,
  onChange: jest.fn(),
};

describe('StepTimeSelectFields', () => {
  it('render StepTimeSelectFields', () => {
    render(<StepTimeSelectField {...stepTimeSelectFieldsProps} />);

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
