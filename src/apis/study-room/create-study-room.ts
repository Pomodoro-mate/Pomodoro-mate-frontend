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
    timeSet: {
      planningTime: 20,
      studyingTime: 20,
      retrospectTime: 20,
      restingTime: 20,
    },
  });

  return data;
};
