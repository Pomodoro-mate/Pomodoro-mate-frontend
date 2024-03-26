import { getStudyRoomInfo } from '@/apis/study-room/get-study-room-info';
import { useQuery } from '@tanstack/react-query';

interface UseStudyRoomQuery {
  studyId: number;
}
const useStudyRoomQuery = ({ studyId }: UseStudyRoomQuery) => {
  return useQuery({
    queryKey: ['get-study-room-info'],
    queryFn: () => getStudyRoomInfo({ studyId }),
  });
};

export default useStudyRoomQuery;
