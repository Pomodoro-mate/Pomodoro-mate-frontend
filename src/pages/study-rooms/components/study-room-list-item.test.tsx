import { screen, render, fireEvent } from '@testing-library/react';
import fixtures from '@/fixtures';
import { STUDY_ROOM_STEP } from '@/constant/study-room';
import StudyRoomListItem from './study-room-list-item';

const context = describe;

const { studyRoom } = fixtures;

const onClick = jest.fn();

describe('StudyRoomListItem', () => {
  it('renders study room list item', () => {
    render(<StudyRoomListItem {...fixtures.studyRoom} onClick={onClick} />);

    screen.getByText(studyRoom.name);
    screen.getByText(`${studyRoom.participantCount}/8`);
    screen.getByText(STUDY_ROOM_STEP[studyRoom.step]);
  });

  context('when click study room list item', () => {
    it('execute onClick function', () => {
      render(<StudyRoomListItem {...fixtures.studyRoom} onClick={onClick} />);

      const studyRoomListItem = screen.getByText(studyRoom.name);

      fireEvent.click(studyRoomListItem);

      expect(onClick).toHaveBeenCalledWith(studyRoom.id);
    });
  });
});
