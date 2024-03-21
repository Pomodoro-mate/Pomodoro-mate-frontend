import { getStudyRoomInfo } from '@/apis/study-room/get-study-room-info';
import { useQuery } from '@tanstack/react-query';

const useStudyRoomQuery = ({ studyId }: { studyId: number }) => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['get-study-room-info'],
    queryFn: () => getStudyRoomInfo({ studyId }),
  });
  return { isLoading, isError, data, error, refetch };
};

export default useStudyRoomQuery;
