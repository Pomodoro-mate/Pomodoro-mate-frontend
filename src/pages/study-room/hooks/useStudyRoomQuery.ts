import { useQuery } from '@tanstack/react-query';
import { StudyRoomInfo } from '@/types/study-room.types';
import { getStudyRoomInfo } from '@/apis/study-room/get-study-room-info';

interface UseStudyRoomQuery {
  studyId: number;
}

const initStudyRoom: StudyRoomInfo = {
  id: 0,
  name: '',
  intro: '',
  step: 'PLANNING',
  participantSummaries: [],
  updateAt: '',
};

const useStudyRoomQuery = ({ studyId }: UseStudyRoomQuery) => {
  return useQuery({
    queryKey: ['get-study-room-info'],
    queryFn: () => getStudyRoomInfo({ studyId }),
    initialData: initStudyRoom,
  });
};

export default useStudyRoomQuery;
