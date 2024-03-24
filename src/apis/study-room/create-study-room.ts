import { http } from '../api';

interface DataType {
  id: number;
}

export const createStudyRoom = async ({
  name,
  intro,
}: {
  name: string;
  intro: string;
}): Promise<DataType> => {
  const { data } = await http.post('/studyrooms', { name, intro });

  return data;
};
