export type PageKey = 'current' | 'total';

export type Page = Record<PageKey, number>;

export type StudyRoomsInfo = {
  id: number;
  name: string;
  intro: string;
  step: string;
  participantCount: number;
};

export type StudyRooms = {
  studyRooms: StudyRoomsInfo[];
  pageDto: Page;
};
