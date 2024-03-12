import { http } from '../api';

type Params = { studyId: number };
type Response = {
  id: number;
  name: string;
  intro: string;
  step: string;
  participantCount: number;
  updateAt: string;
};

export const studyRoomInfo = async ({ studyId }: Params): Promise<Response> => {
  const response = await http.get(`/studyrooms/${studyId}`);
  return response.data;
};
