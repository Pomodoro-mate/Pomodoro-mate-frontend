export const STUDY_ROOM_STEP = {
  WAITING: '대기',
  PLANNING: '계획',
  STUDYING: '스터디',
  RETROSPECT: '회고',
  RESTING: '휴식',
  COMPLETED: '완료',
};

export const STUDY_ROOM_STEP_TO_TIMESET = {
  PLANNING: 'planningTime',
  STUDYING: 'studyingTime',
  RETROSPECT: 'retrospectTime',
  RESTING: 'restingTime',
} as const;
