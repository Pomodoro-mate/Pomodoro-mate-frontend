import { http } from '../api';
import { PageDto, StudyRoomSummary } from '@/types/study-room.types';

interface GetStudyRoomsParams {
  page: number;
}

interface GetStudyRoomsResponse {
  studyRooms: StudyRoomSummary[];
  pageDto: PageDto;
}

export const getStudyRooms = async ({
  page,
}: GetStudyRoomsParams): Promise<GetStudyRoomsResponse> => {
  const { data } = await http.get('/studyrooms', { params: { page } });

  return data;
};
