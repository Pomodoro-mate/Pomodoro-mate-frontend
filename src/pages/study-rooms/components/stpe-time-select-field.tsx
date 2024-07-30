import { TimeSet } from '@/types/study-room.types';

import { STUDY_ROOM_STEP_PROGRESS_TIME, STUDY_ROOM_STEP_TIME_UNIT } from '@/constant/study-room';

import SelectStudyTime from './select-study-time';

const generateTimeValues = (min: number, max: number) => {
  const length = Math.floor((max - min) / STUDY_ROOM_STEP_TIME_UNIT) + 1;

  return Array.from({ length }, (_, index) => min + index * STUDY_ROOM_STEP_TIME_UNIT);
};

interface StepTimeSelectFieldsProps {
  timeSet: TimeSet;
  onChange: (name: string, seleted: string) => void;
}

const StepTimeSelectField = ({ timeSet, onChange }: StepTimeSelectFieldsProps) => {
  const stepTimeValues = (() => {
    const planning = generateTimeValues(
      STUDY_ROOM_STEP_PROGRESS_TIME.PLANNING.MIN,
      STUDY_ROOM_STEP_PROGRESS_TIME.PLANNING.MAX,
    );

    const studying = generateTimeValues(
      STUDY_ROOM_STEP_PROGRESS_TIME.STUDYING.MIN,
      STUDY_ROOM_STEP_PROGRESS_TIME.STUDYING.MAX,
    );

    const retrospect = generateTimeValues(
      STUDY_ROOM_STEP_PROGRESS_TIME.RETROSPECT.MIN,
      STUDY_ROOM_STEP_PROGRESS_TIME.RETROSPECT.MAX,
    );

    const resting = generateTimeValues(
      STUDY_ROOM_STEP_PROGRESS_TIME.RESTING.MIN,
      STUDY_ROOM_STEP_PROGRESS_TIME.RESTING.MAX,
    );

    return { planning, studying, retrospect, resting };
  })();

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <SelectStudyTime
        label="계획 단계"
        selected={String(timeSet.planningTime)}
        name="planningTime"
        option={stepTimeValues.planning}
        onChange={onChange}
      />
      <SelectStudyTime
        label="스터디 단계"
        selected={String(timeSet.studyingTime)}
        name="studyingTime"
        option={stepTimeValues.studying}
        onChange={onChange}
      />
      <SelectStudyTime
        label="회고 단계"
        selected={String(timeSet.retrospectTime)}
        name="retrospectTime"
        option={stepTimeValues.retrospect}
        onChange={onChange}
      />
      <SelectStudyTime
        label="휴식 단계"
        selected={String(timeSet.restingTime)}
        name="restingTime"
        option={stepTimeValues.resting}
        onChange={onChange}
      />
    </div>
  );
};
export default StepTimeSelectField;
