export const STUDY_ROOM_STEP = {
  WAITING: '대기',
  PLANNING: '계획',
  STUDYING: '스터디',
  RETROSPECT: '회고',
  RESTING: '휴식',
  COMPLETED: '완료',
};

export const STUDY_ROOM_STEP_TO_TIME_SET = {
  PLANNING: 'planningTime',
  STUDYING: 'studyingTime',
  RETROSPECT: 'retrospectTime',
  RESTING: 'restingTime',
} as const;

export const STUDY_ROOM_STEP_PROGRESS_TIME = {
  PLANNING: {
    MIN: 0,
    MAX: 20,
  },
  STUDYING: {
    MIN: 10,
    MAX: 60,
  },
  RETROSPECT: {
    MIN: 0,
    MAX: 20,
  },
  RESTING: {
    MIN: 0,
    MAX: 20,
  },
};

export const STUDY_ROOM_STEP_TIME_UNIT = 5;
