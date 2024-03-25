import { useNavigate } from 'react-router-dom';
import { List, Pagination } from '@mui/material';
import { ROUTE_PATH } from '@/constant/routes';
import { participateStudy } from '@/apis/study-room/participate-study';
import useStudyRoomsQuery from '@/hooks/useStudyRoomsQuery';
import StudyRoomListItem from './study-room-list-item';

const StudyRoomList = () => {
  const navigate = useNavigate();

  const { isLoading, studyRooms, pageDto, isError, page, setPage } = useStudyRoomsQuery();

  const handleChangePage = (_: React.ChangeEvent<unknown>, targetPage: number) => {
    if (page === targetPage) return;

    setPage(targetPage);
  };

  const handleClickStudyRoom = async (studyRoomId: number) => {
    try {
      await participateStudy({ studyRoomId });

      navigate(`${ROUTE_PATH.STUDY_ROOM}/${studyRoomId}`);
    } catch (e) {
      console.error(e);
    }
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
        {studyRooms.map((studyRoom) => (
          <StudyRoomListItem
            key={`study-room-${studyRoom.id}`}
            {...studyRoom}
            onClick={handleClickStudyRoom}
          />
        ))}
      </List>
      <Pagination count={pageDto.total} page={pageDto.current} onChange={handleChangePage} />
    </div>
  );
};

export default StudyRoomList;
