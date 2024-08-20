import { API_PATH } from '@/constant/api-path';
import { http } from '../api';
import { TimeSet } from '@/types/study-room.types';

interface CreateStudyRoomParams {
  name: string;
  intro: string;
  timeSet: TimeSet;
}

interface CreateStudyRoomResponse {
  id: number;
  participantId: number;
}

export const createStudyRoom = async ({
  name,
  intro,
  timeSet,
}: CreateStudyRoomParams): Promise<CreateStudyRoomResponse> => {
  const { data } = await http.post(API_PATH.STUDY_ROOMS, { name, intro, timeSet });

  return data;
};
