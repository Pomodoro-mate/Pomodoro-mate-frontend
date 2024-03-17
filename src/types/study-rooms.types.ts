import { STUDY_ROOM_STEP } from '@/constant/study-room';

export type PageKey = 'current' | 'total';

export type PageDto = Record<PageKey, number>;

export type StudyRoom = {
  id: number;
  name: string;
  intro: string;
  step: keyof typeof STUDY_ROOM_STEP;
  participantCount: number;
};

export type StudyRooms = {
  studyRooms: StudyRoom[];
  pageDto: PageDto;
};
