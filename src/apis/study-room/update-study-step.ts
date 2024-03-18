import { http } from '../api';

type Params = { studyId: number; step: string };

export const studyStep = async ({ studyId }: Params): Promise<void> => {
  const { data } = await http.put(`/stduyrooms/${studyId}/next-step`);
  return data;
};
