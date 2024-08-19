import { API_PATH } from '@/constant/api-path';
import { http } from '../api';

type ExitStudyRoomParams = {
  studyRoomId: number;
  participantId: number;
};

export const exitStudyRoom = async ({ studyRoomId, participantId }: ExitStudyRoomParams) => {
  await http.delete(`/${API_PATH.STUDY_ROOMS}/${studyRoomId}/participants/${participantId}`);
};
