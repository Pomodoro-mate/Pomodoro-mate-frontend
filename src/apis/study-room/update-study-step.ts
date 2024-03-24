import { http } from '../api';

type Params = { studyId: number; step: string };

export const studyStep = async ({ studyId, step }: Params): Promise<void> => {
  const { data } = await http.put(`/studyrooms/${studyId}/next-step`, { step });
  return data;
};
