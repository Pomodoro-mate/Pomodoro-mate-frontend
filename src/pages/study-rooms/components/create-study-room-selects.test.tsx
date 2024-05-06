import { screen } from '@testing-library/react';
import { render } from '@/test-helper';
import CreateStudyRoomSelects from './create-study-room-selects';
import fixtures from '@/fixtures';

const context = describe;

const { studyRoom } = fixtures;

const createStudyRoomProps = {
  timeSet: studyRoom.timeSet,
  onChangeSelect: jest.fn(),
};

describe('CreateStudyRoomSelects', () => {
  it('render CreateStudyRoomSelects', () => {
    render(<CreateStudyRoomSelects {...createStudyRoomProps} />);

    screen.getByLabelText(/계획/);
    screen.getByLabelText(/스터디/);
  });

  context('when select changes', () => {
    it('execute handler function', () => {
      // TODO: UI 라이브러리 변경 후 추가 예정
      // const { onChangeSelect } = createStudyRoomProps;
      // render(<CreateStudyRoomSelects {...createStudyRoomProps} />);
      // const selectElement = screen.getByRole('combobox', { name: /회고/ });
      // userEvent.selectOptions(selectElement, screen.getByRole('option', { name: '5분' }));
      // expect(onChangeSelect).toHaveBeenCalled();
    });
  });
});
