import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material';
import { createStudyRoom as createStudyRoomApi } from '@/apis/study-room/create-study-room';
import { ROUTE_PATH } from '@/constant/routes';
import { MODAL_KEYS } from '@/constant/modal';
import { STUDY_ROOM_STEP_PROGRESS_TIME } from '@/constant/study-room';
import { setLocalStorage } from '@/utils/storage';
import { TimeSet } from '@/types/study-room.types';
import useModal from '@/hooks/useModal';

const useCreateStudyRoomForm = () => {
  const navigate = useNavigate();

  const { onClose } = useModal(MODAL_KEYS.CREATE_STUDY_ROOM);

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

  const createStudyRoom = async ({
    name,
    intro,
    timeSet,
  }: {
    name: string;
    intro: string;
    timeSet: TimeSet;
  }) => {
    try {
      const { id, participantId } = await createStudyRoomApi({ name, intro, timeSet });

      setLocalStorage({ key: 'participantId', value: String(participantId) });

      onClose();

      navigate(`${ROUTE_PATH.STUDY_ROOMS}/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    textFields,
    timeSet,
    handleChangeTextField,
    handleChangeSelect,
    createStudyRoom,
  };
};

export default useCreateStudyRoomForm;
