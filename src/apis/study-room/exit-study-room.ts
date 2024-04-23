import { http } from '../api';

type Param = {
  studyRoomId: number;
  participantId: number;
};

export const exitStudyRoom = async ({ studyRoomId, participantId }: Param) => {
  return await http.delete(`/studyrooms/${studyRoomId}/participants/${participantId}`);
};
