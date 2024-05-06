import { STUDY_ROOM_STEP_TIME_UNIT } from '@/constant/study-room';

const generateTimeValues = (min: number, max: number) => {
  const length = Math.floor((max - min) / STUDY_ROOM_STEP_TIME_UNIT) + 1;

  return Array.from({ length }, (_, index) => min + index * STUDY_ROOM_STEP_TIME_UNIT);
};

export default generateTimeValues;
