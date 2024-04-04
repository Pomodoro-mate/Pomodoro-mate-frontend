import { screen, render, fireEvent } from '@testing-library/react';
import fixtures from '@/fixtures';
import StudyRoomList from '@/pages/study-rooms/components/study-room-list';

const context = describe;

const { studyRooms, pageDto } = fixtures;

const mockQueryData = {
  isLoading: false,
  studyRooms,
  pageDto,
  isError: false,
  setPage: jest.fn(),
};

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

jest.mock('@/apis/study-room/join-study-room', () => ({
  joinStudyRoom: jest.fn(),
}));

jest.mock('../hooks/useStudyRoomsQuery', () => () => mockQueryData);

describe('StudyRoomList', () => {
  it('renders study room list', () => {
    render(<StudyRoomList />);

    screen.getByText(studyRooms[0].name);
    screen.getByText(pageDto.total);
  });

  context('click page button', () => {
    it('execute setPage function', async () => {
      render(<StudyRoomList />);

      fireEvent.click(screen.getByText(pageDto.total));

      expect(mockQueryData.setPage).toHaveBeenCalled();
    });
  });

  context('empty study room list', () => {
    beforeEach(() => {
      mockQueryData.studyRooms = [];
    });

    it('render empty text', () => {
      render(<StudyRoomList />);

      screen.getByText(/스터디룸 없음/);
    });
  });

  context('when isLoading is true', () => {
    beforeEach(() => {
      mockQueryData.isLoading = true;
      mockQueryData.isError = false;
    });

    it('render loading text', () => {
      render(<StudyRoomList />);

      screen.getByText(/Loading/);
    });
  });

  context('when isError is true', () => {
    beforeEach(() => {
      mockQueryData.isLoading = false;
      mockQueryData.isError = true;
    });

    it('render isError text', () => {
      render(<StudyRoomList />);

      screen.getByText(/Error/);
    });
  });
});
