import { http } from '../api';

interface JoinStudyRoomParams {
  studyRoomId: number;
}

interface JoinStudyRoomResponse {
  userId: number;
}

export const joinStudyRoom = async ({
  studyRoomId,
}: JoinStudyRoomParams): Promise<JoinStudyRoomResponse> => {
  const { data } = await http.post(`/studyrooms/${studyRoomId}/participants`);

  return { userId: data.id };
};
