import { http } from '../api';

type ExitStudyRoomParam = {
  studyRoomId: number;
  participantId: number;
};

export const exitStudyRoom = async ({ studyRoomId, participantId }: ExitStudyRoomParam) => {
  await http.delete(`/studyrooms/${studyRoomId}/participants/${participantId}`);
};
