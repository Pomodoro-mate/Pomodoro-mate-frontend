import { http } from '../api';

interface JoinStudyRoomParams {
  studyRoomId: number;
}

interface JoinStudyRoomResponse {
  id: number;
}

export const joinStudyRoom = async ({
  studyRoomId,
}: JoinStudyRoomParams): Promise<JoinStudyRoomResponse> => {
  // TODO : 사용자에게 isForce 값을 받도록 변경
  const { data } = await http.post(`/studyrooms/${studyRoomId}/participants`, { isForce: false });

  return data;
};
