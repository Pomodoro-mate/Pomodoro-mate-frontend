import { joinStudyRoom } from '@/apis/study-room/join-study-room';
import { ROUTE_PATH } from '@/constant/routes';
import useStudyRoomsQuery from '@/pages/study-rooms/hooks/useStudyRoomsQuery';

import { List, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StudyRoomListItem from './study-room-list-item';
import { participantIdStorage } from '@/utils/storage';

const StudyRoomList = () => {
  const navigate = useNavigate();

  const { isLoading, studyRooms, pageDto, isError, page, setPage } = useStudyRoomsQuery();

  const handlePageChange = (_: React.ChangeEvent<unknown>, targetPage: number) => {
    if (page === targetPage) return;

    setPage(targetPage);
  };

  const handleJoinStudyRoom = async (studyRoomId: number) => {
    try {
      const data = await joinStudyRoom({ studyRoomId });
      const { id: participantId } = data;
      participantIdStorage.setItem(participantId);
      navigate(`${ROUTE_PATH.STUDY_ROOMS}/${studyRoomId}`);
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
          <StudyRoomListItem key={studyRoom.id} {...studyRoom} onClick={handleJoinStudyRoom} />
        ))}
      </List>
      <Pagination count={pageDto.total} page={pageDto.current} onChange={handlePageChange} />
    </div>
  );
};

export default StudyRoomList;
