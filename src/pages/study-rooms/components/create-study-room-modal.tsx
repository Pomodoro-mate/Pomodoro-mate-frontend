import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { MODAL_KEYS } from '@/constant/modal';
import { ROUTE_PATH } from '@/constant/routes';
import { createStudyRoom as createStudyRoomApi } from '@/apis/study-room/create-study-room';
import { participantIdStorage } from '@/utils/storage';
import useModal from '@/hooks/useModal';
import useCreateStudyRoomForm from '../hooks/useCreateStudyRoomForm';
import Modal from '@/components/common/modal/modal';
import StepTimeSelectFields from './step-time-select-fields';

const CreateStudyRoomModal = () => {
  const navigate = useNavigate();

  const { isOpen, onClose } = useModal(MODAL_KEYS.CREATE_STUDY_ROOM);

  const {
    textFields: { name, intro },
    timeSet,
    handleChangeTextField,
    handleChangeSelect,
  } = useCreateStudyRoomForm();

  const createStudyRoom = async () => {
    try {
      const { id, participantId } = await createStudyRoomApi({ name, intro, timeSet });
      participantIdStorage.setItem(participantId);

      onClose();

      navigate(`${ROUTE_PATH.STUDY_ROOMS}/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="스터디룸 생성"
      closeBtn="취소"
      actionBtn="방 만들기"
      onClickActionBtn={createStudyRoom}
      onClose={onClose}
    >
      <TextField
        fullWidth
        label="방 제목"
        name="name"
        variant="outlined"
        margin="normal"
        onChange={handleChangeTextField}
      />
      <TextField
        fullWidth
        label="설명"
        name="intro"
        variant="outlined"
        multiline
        rows={3}
        onChange={handleChangeTextField}
      />
      <StepTimeSelectFields timeSet={timeSet} onChangeSelect={handleChangeSelect} />
    </Modal>
  );
};

export default CreateStudyRoomModal;
