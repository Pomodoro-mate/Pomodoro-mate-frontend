import { getStudyRoomInfo } from '@/apis/study-room/get-study-room-info';
import { joinStudyRoom } from '@/apis/study-room/join-study-room';

import { ROUTE_PATH } from '@/constant/routes';
import { participantIdStorage } from '@/utils/storage';
import { useNavigate } from 'react-router-dom';
import useStudyRoomsQuery from '../hooks/useStudyRoomsQuery';

import { StudyRoomInfo } from '@/types/study-room.types';
import { useState } from 'react';
import StudyRoomDetailDialog from './study-room-detail-dialog';
import StudyRoomListItem from './study-room-list-item';
import Paginator from '@/components/common/paginator';

const StudyRoomList = () => {
  const navigate = useNavigate();

  const { isLoading, studyRooms, pageDto, isError, page, setPage } = useStudyRoomsQuery();

  const handlePageChange = (targetPage: number) => {
    if (page === targetPage) return;

    setPage(targetPage);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = (status: boolean) => setIsOpen(status);

  const [info, setInfo] = useState({} as StudyRoomInfo);

  const openStudyRoomModal = async (studyId: number) => {
    try {
      const data = await getStudyRoomInfo({ studyId });
      setInfo(data);
      setIsOpen(true);
    } catch (err) {
      console.error({ err });
    }
  };

  const handleJoinStudyRoom = async (studyRoomId: number) => {
    try {
      const data = await joinStudyRoom({ studyRoomId });
      const { id: participantId } = data;

      participantIdStorage.setItem(participantId);
      navigate(`${ROUTE_PATH.STUDY_ROOMS}/${studyRoomId}`, { state: { title: info.name } });
    } catch (err) {
      console.error({ err });
    }
  };

  if (isLoading) {
    return (
      <div className="mt-2">
        <p>Loading..</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-2">
        <p>Error!</p>
      </div>
    );
  }

  if (!studyRooms.length) {
    return (
      <div className="mt-2">
        <p>스터디룸 없음</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-5">
        {studyRooms.map((studyRoom) => (
          <StudyRoomListItem key={studyRoom.id} {...studyRoom} onClick={openStudyRoomModal} />
        ))}
      </div>
      <Paginator pageDto={pageDto} handlePageChange={handlePageChange} />
      {isOpen && (
        <StudyRoomDetailDialog
          toggle={toggle}
          isOpen={isOpen}
          studyRoomInfo={info}
          joinStudyRoom={handleJoinStudyRoom}
        />
      )}
    </>
  );
};

export default StudyRoomList;
