import { API_PATH } from '@/constant/api-path';
import { http } from '../api';
import { StudyRoomInfo } from '@/types/study-room.types';

type Params = { studyId: number };

export const getStudyRoomInfo = async ({ studyId }: Params): Promise<StudyRoomInfo> => {
  const { data } = await http.get(`/${API_PATH.STUDY_ROOMS}/${studyId}`);

  return data;
};
