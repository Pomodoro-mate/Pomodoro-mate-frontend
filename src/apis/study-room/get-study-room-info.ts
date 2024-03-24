import { Step } from '@/types/study-room.types';
import { http } from '../api';

type Params = { studyId: string };

type Response = {
  id: number;
  name: string;
  intro: string;
  step: Step;
  participantCount: number;
  updateAt: string;
};

export const getStudyRoomInfo = async ({ studyId }: Params): Promise<Response> => {
  const { data } = await http.get(`/studyrooms/${studyId}`);
  return data;
};
