import { screen, render } from '@testing-library/react';
import fixtures from '@/fixtures';
import { STUDY_ROOM_STEP } from '@/constant/study-room';
import StudyRoomListItem from './study-room-list-item';

const { studyRoom } = fixtures;

describe('StudyRoomListItem', () => {
  it('renders study room list item', () => {
    render(<StudyRoomListItem {...fixtures.studyRoom} />);

    screen.getByText(studyRoom.name);
    screen.getByText(`${studyRoom.participantCount}/8`);
    screen.getByText(STUDY_ROOM_STEP[studyRoom.step]);
  });
});
