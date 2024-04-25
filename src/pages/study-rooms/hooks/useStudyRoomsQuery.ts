import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStudyRooms } from '@/apis/study-room/get-study-rooms';

const useStudyRoomsQuery = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data } = useQuery({
    queryKey: ['study-room-list', page],
    queryFn: () => getStudyRooms({ page }),
  });

  // 캐싱을 없애는 방법이 더 좋을듯, (실시간으로 스터디룸 목록을 체크해야 할 것 같기 때문) 얘기하고 바꾸자

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
