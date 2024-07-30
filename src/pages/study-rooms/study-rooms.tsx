import { Title } from '@/components/ui/title';
import StudyRoomList from './components/study-room-list';
import CreateStudyRoomDialog from './components/create-study-room-dialog';

const StudyRooms = () => {
  return (
    <div className="mx-auto">
      <Title className="mb-7">스터디룸 목록</Title>
      <StudyRoomList />
      <div className="flex flex-col items-center">
        <div className="mt-4 mb-4">원하는 스터디룸이 없으시간요?</div>
        <CreateStudyRoomDialog />
      </div>
    </div>
  );
};

export default StudyRooms;
