import { http } from '../api';
import { PageDto, StudyRoom } from '@/types/study-rooms.types';

interface DataType {
  studyRooms: StudyRoom[];
  pageDto: PageDto;
}

export const getStudyRooms = async ({ page }: { page: number }): Promise<DataType> => {
  const { data } = await http.get('/studyrooms', { params: { page } });

  return data;
};
