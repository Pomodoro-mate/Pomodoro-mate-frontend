import { http } from '../api';

export const createStudyRoom = async ({ name, intro }: { name: string; intro: string }) => {
  const { data } = await http.post('/studyrooms', { name, intro });

  return data;
};
