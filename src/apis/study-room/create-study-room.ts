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
  const { data } = await http.post('/studyrooms', { name, intro, timeSet });

  return data;
};
