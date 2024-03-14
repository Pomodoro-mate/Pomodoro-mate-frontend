export type PageKey = 'current' | 'total';

export type PageDto = Record<PageKey, number>;

export type StudyRoom = {
  id: number;
  name: string;
  intro: string;
  step: 'PLANNING' | 'STUDYING' | 'RETROSPECT' | 'RESTING' | 'COMPLETED';
  participantCount: number;
};

export type StudyRooms = {
  studyRooms: StudyRoom[];
  pageDto: PageDto;
};
