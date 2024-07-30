import { http } from '../api';
import { StudyRoomInfo } from '@/types/study-room.types';

type Params = { studyId: number };

export const getStudyRoomInfo = async ({ studyId }: Params): Promise<StudyRoomInfo> => {
  const { data } = await http.get(`/studyrooms/${studyId}`);

  return data;
};
