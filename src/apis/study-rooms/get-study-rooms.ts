import { http } from '../api';

export const getStudyRooms = async ({ page }: { page: number }) => {
  const { data } = await http.get('/studyrooms', { params: { page } });

  return data;
};
