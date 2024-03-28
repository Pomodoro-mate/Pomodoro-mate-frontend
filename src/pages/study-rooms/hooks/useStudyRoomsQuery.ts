import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStudyRooms } from '@/apis/study-room/get-study-rooms';

const useStudyRoomsQuery = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data } = useQuery({
    queryKey: ['study-room-list', page],
    queryFn: () => getStudyRooms({ page }),
  });

  return {
    isLoading,
    studyRooms: data?.studyRooms ?? [],
    pageDto: data?.pageDto ?? { current: 0, total: 0 },
    isError,
    page,
    setPage,
  };
};

export default useStudyRoomsQuery;
