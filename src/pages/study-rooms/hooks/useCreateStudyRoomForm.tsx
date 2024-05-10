import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { STUDY_ROOM_STEP_PROGRESS_TIME } from '@/constant/study-room';

const useCreateStudyRoomForm = () => {
  const [textFields, setTextFields] = useState({
    name: '',
    intro: '',
  });

  const [timeSet, setTimeSet] = useState({
    planningTime: STUDY_ROOM_STEP_PROGRESS_TIME.PLANNING.MIN,
    studyingTime: STUDY_ROOM_STEP_PROGRESS_TIME.STUDYING.MIN,
    retrospectTime: STUDY_ROOM_STEP_PROGRESS_TIME.RETROSPECT.MIN,
    restingTime: STUDY_ROOM_STEP_PROGRESS_TIME.RESTING.MIN,
  });

  const handleChangeTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setTextFields({ ...textFields, [name]: value });
  };

  const handleChangeSelect = (event: SelectChangeEvent<unknown>) => {
    const { value, name } = event.target;

    setTimeSet((prev) => ({ ...prev, [name]: Number(value) }));
  };

  return {
    textFields,
    timeSet,
    handleChangeTextField,
    handleChangeSelect,
  };
};

export default useCreateStudyRoomForm;
