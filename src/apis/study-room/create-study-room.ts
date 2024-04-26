import { http } from '../api';

interface CreateStudyRoomParams {
  name: string;
  intro: string;
}

interface CreateStudyRoomResponse {
  id: number;
  participantId: number;
}

export const createStudyRoom = async ({
  name,
  intro,
}: CreateStudyRoomParams): Promise<CreateStudyRoomResponse> => {
  const { data } = await http.post('/studyrooms', {
    name,
    intro,
  });

  return data;
};
