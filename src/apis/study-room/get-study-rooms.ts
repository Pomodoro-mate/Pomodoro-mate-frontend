import { http } from '../api';
import { PageDto, StudyRoom } from '@/types/study-rooms.types';

interface GetStudyRoomsParams {
  page: number;
}

interface GetStudyRoomsResponse {
  studyRooms: StudyRoom[];
  pageDto: PageDto;
}

export const getStudyRooms = async ({
  page,
}: GetStudyRoomsParams): Promise<GetStudyRoomsResponse> => {
  const { data } = await http.get('/studyrooms', { params: { page } });

  return data;
};
