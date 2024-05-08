import { useMemo } from 'react';
import styled from 'styled-components';
import { SelectChangeEvent } from '@mui/material';
import { STUDY_ROOM_STEP_PROGRESS_TIME } from '@/constant/study-room';
import { TimeSet } from '@/types/study-room.types';
import generateTimeValues from '../utils/generate-time-values';
import StepTimeSelect from '@/pages/study-rooms/components/step-time-select';

interface CreateStudyRoomSelectsProps {
  timeSet: TimeSet;
  onChangeSelect: (event: SelectChangeEvent<unknown>) => void;
}

const CreateStudyRoomSelects = ({ timeSet, onChangeSelect }: CreateStudyRoomSelectsProps) => {
  // step별 시간 선택 select 요소로 들어갈 value 값을 배열로 저장한 변수
  const stepTimeValues = useMemo(
    () =>
      (() => {
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
      })(),
    [],
  );

  return (
    <SelectsWrapper>
      <StepTimeSelect
        labelId="planning-time-select"
        value={String(timeSet.planningTime)}
        label="계획 시간"
        name="planningTime"
        onChange={onChangeSelect}
        optionValues={stepTimeValues.planning}
      />

      <StepTimeSelect
        labelId="studying-time-select"
        value={String(timeSet.studyingTime)}
        label="스터디 시간"
        name="studyingTime"
        onChange={onChangeSelect}
        optionValues={stepTimeValues.studying}
      />

      <StepTimeSelect
        labelId="retrospect-time-select"
        value={String(timeSet.retrospectTime)}
        label="회고 시간"
        name="retrospectTime"
        onChange={onChangeSelect}
        optionValues={stepTimeValues.retrospect}
      />

      <StepTimeSelect
        labelId="resting-time-select"
        value={String(timeSet.restingTime)}
        label="휴식 시간"
        name="restingTime"
        onChange={onChangeSelect}
        optionValues={stepTimeValues.resting}
      />
    </SelectsWrapper>
  );
};

const SelectsWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  & > * {
    flex: 1 1 calc(50% - 4px);
  }
`;

export default CreateStudyRoomSelects;
