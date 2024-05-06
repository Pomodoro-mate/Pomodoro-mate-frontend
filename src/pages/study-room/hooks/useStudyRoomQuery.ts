import { useQuery } from '@tanstack/react-query';
import { StudyRoomInfo } from '@/types/study-room.types';
import { getStudyRoomInfo } from '@/apis/study-room/get-study-room-info';

interface UseStudyRoomQuery {
  studyId: number;
}

const initialStudyRoom: StudyRoomInfo = {
  id: 0,
  name: '',
  intro: '',
  step: 'PLANNING',
  timeSet: {
    planningTime: 0,
    studyingTime: 0,
    retrospectTime: 0,
    restingTime: 0,
  },
  participantSummaries: [],
  updateAt: '',
};

const useStudyRoomQuery = ({ studyId }: UseStudyRoomQuery) => {
  return useQuery({
    queryKey: ['get-study-room-info'],
    queryFn: () => getStudyRoomInfo({ studyId }),
    initialData: initialStudyRoom,
  });
};

export default useStudyRoomQuery;
