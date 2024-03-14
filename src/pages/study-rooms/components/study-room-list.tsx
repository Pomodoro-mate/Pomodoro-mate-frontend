import { List, Pagination } from '@mui/material';
import { StudyRoom } from '@/types/study-rooms.types';
import useStudyRoomsQuery from '@/hooks/useStudyRoomsQuery';
import StudyRoomListItem from './study-room-list-item';

const studyRoomKey = (id: number) => {
  return `study-room-${id}`;
};

const StudyRoomList = () => {
  const { isLoading, studyRooms, pageDto, isError, page, setPage } = useStudyRoomsQuery();

  const handleChangePage = (_: React.ChangeEvent<unknown>, targetPage: number) => {
    if (page === targetPage) return;

    setPage(targetPage);
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading..</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Error!</p>
      </div>
    );
  }

  if (studyRooms.length === 0) {
    return (
      <div>
        <p>스터디룸 없음</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <List sx={{ width: '100%' }}>
        {studyRooms.map((studyRoom: StudyRoom) => (
          <StudyRoomListItem key={studyRoomKey(studyRoom.id)} {...studyRoom} />
        ))}
      </List>
      <Pagination count={pageDto.total} page={pageDto.current} onChange={handleChangePage} />
    </div>
  );
};

export default StudyRoomList;
