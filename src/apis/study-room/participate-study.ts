import { http } from '../api';

interface DataType {
  userId: number;
}

export const participateStudy = async ({
  studyRoomId,
}: {
  studyRoomId: number;
}): Promise<DataType> => {
  const { data } = await http.post(`/studyrooms/${studyRoomId}/participants`);

  return { userId: data.id };
};
