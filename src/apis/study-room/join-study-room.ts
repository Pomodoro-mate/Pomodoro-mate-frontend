import { http } from '../api';

interface JoinStudyRoomParams {
  studyRoomId: number;
}

interface JoinStudyRoomResponse {
  participantId: number;
}

export const joinStudyRoom = async ({
  studyRoomId,
}: JoinStudyRoomParams): Promise<JoinStudyRoomResponse> => {
  const { data } = await http.post(`/studyrooms/${studyRoomId}/participants`);

  return { participantId: data.id };
};
