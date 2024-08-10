import { STUDY_ROOM_STEP } from '@/constant/study-room';

export type Step = keyof typeof STUDY_ROOM_STEP;

export type PageKey = 'current' | 'total';

export type PageDto = Record<PageKey, number>;

//스터디 룸 공통 데이터
export type StudyRoom = {
  id: number;
  name: string;
  intro: string;
  step: Step;
};

//스터디 룸 정보
export type ParticipantSummary = {
  id: number;
  userId: number;
  nickname: string;
  imageUrl: string;
  isHost: boolean;
};

export type TimeSet = {
  planningTime: number;
  studyingTime: number;
  retrospectTime: number;
  restingTime: number;
};

export type StudyRoomInfo = StudyRoom & {
  participantSummaries: ParticipantSummary[];
  timeSet: TimeSet;
  updateAt: string;
};

//스터디 룸 스텝 관련 정보
export type StepInfo = {
  step: Step;
  progressTime: number;
  updateAt: string;
};

//스터디 룸 목록
export type StudyRoomSummary = StudyRoom & {
  participantCount: number;
};

export type StudyRooms = {
  studyRooms: StudyRoomSummary[];
  pageDto: PageDto;
};
