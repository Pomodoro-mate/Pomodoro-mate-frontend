import { http } from '../api';

type StudyRoomsResponse = {
  studyRooms: [
    {
      id: number;
      name: string;
      intro: string;
      step: string;
      participantCount: number;
    },
  ];
  pageDto: {
    current: number;
    total: number;
  };
};

type StudyRoomsData = {
  data: { page: number };
};

export const getStudyRooms = async (data: StudyRoomsData): Promise<StudyRoomsResponse> => {
  const response = await http.get<StudyRoomsResponse>('/studyrooms', data);
  return response.data;
};
