import { getStudyRoomInfo } from '@/apis/study-room/get-study-room-info';
import { useQuery } from '@tanstack/react-query';

const useStudyRoomQuery = ({ studyId }: { studyId: string }) => {
  return useQuery({
    queryKey: ['get-study-room-info'],
    queryFn: () => getStudyRoomInfo({ studyId }),
  });
};

export default useStudyRoomQuery;
