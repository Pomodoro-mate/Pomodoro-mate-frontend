import { screen } from '@testing-library/react';
import { render } from '@/test-helper';
import fixtures from '@/fixtures';
import CreateStudyRoomSelectFields from './create-study-room-select-fields';

const context = describe;

const { studyRoom } = fixtures;

const createStudyRoomSelectFieldsProps = {
  timeSet: studyRoom.timeSet,
  onChangeSelect: jest.fn(),
};

describe('CreateStudyRoomSelectFields', () => {
  it('render CreateStudyRoomSelectFields', () => {
    render(<CreateStudyRoomSelectFields {...createStudyRoomSelectFieldsProps} />);

    screen.getByLabelText(/계획/);
    screen.getByLabelText(/스터디/);
  });

  context('when select changes', () => {
    it('execute handler function', () => {
      // TODO: UI 라이브러리 변경 후 추가 예정
      // const { onChangeSelect } = createStudyRoomSelectFieldsProps;
      // render(<CreateStudyRoomSelectFields {...createStudyRoomSelectFieldsProps} />);
      // const selectElement = screen.getByRole('combobox', { name: /회고/ });
      // userEvent.selectOptions(selectElement, screen.getByRole('option', { name: '5분' }));
      // expect(onChangeSelect).toHaveBeenCalled();
    });
  });
});
