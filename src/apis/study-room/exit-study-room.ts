import { http } from '../api';

type ExitStudyRoomParams = {
  studyRoomId: number;
  participantId: number;
};

export const exitStudyRoom = async ({ studyRoomId, participantId }: ExitStudyRoomParams) => {
  await http.delete(`/studyrooms/${studyRoomId}/participants/${participantId}`);
};
