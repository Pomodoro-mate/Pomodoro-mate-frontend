import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import StudyRoomListButtons from '@/pages/study-rooms/components/study-room-list-buttons';

const context = describe;

const onOpen = jest.fn();

jest.mock('@/hooks/useModal', () => () => ({
  onOpen,
}));

describe('StudyRoomListButtons', () => {
  it('render study room list buttons', () => {
    render(<StudyRoomListButtons />);

    screen.getByRole('button', { name: '스터디룸 생성' });
  });

  context('when click "스터디룸 생성" button', () => {
    it('execute onOpen function', async () => {
      render(<StudyRoomListButtons />);

      const button = screen.getByRole('button', { name: '스터디룸 생성' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(onOpen).toHaveBeenCalled();
      });
    });
  });
});
