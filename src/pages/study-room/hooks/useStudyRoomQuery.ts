import { useSuspenseQuery } from '@tanstack/react-query';
import { getStudyRoomInfo } from '@/apis/study-room/get-study-room-info';

interface UseStudyRoomQuery {
  studyId: number;
}

const useStudyRoomQuery = ({ studyId }: UseStudyRoomQuery) => {
  return useSuspenseQuery({
    queryKey: ['get-study-room-info', studyId],
    queryFn: () => getStudyRoomInfo({ studyId }),
    gcTime: 0,
  });
};

export default useStudyRoomQuery;
