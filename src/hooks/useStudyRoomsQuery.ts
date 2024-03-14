import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StudyRoom, PageDto } from '@/types/study-rooms.types';
import { getStudyRooms } from '@/apis/study-rooms/get-study-rooms';

interface QueryData {
  studyRooms: StudyRoom[];
  pageDto: PageDto;
}

const useStudyRoomsQuery = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data } = useQuery<QueryData>({
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
