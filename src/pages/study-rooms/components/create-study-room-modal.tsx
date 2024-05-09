import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { MODAL_KEYS } from '@/constant/modal';
import { ROUTE_PATH } from '@/constant/routes';
import { createStudyRoom as createStudyRoomApi } from '@/apis/study-room/create-study-room';
import useModal from '@/hooks/useModal';
import useCreateStudyRoomForm from '../hooks/useCreateStudyRoomForm';
import Modal from '@/components/common/modal/modal';
import CreateStudyRoomSelects from './create-study-room-select-fields';
import { setLocalStorage } from '@/utils/storage';

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

      setLocalStorage({ key: 'participantId', value: String(participantId) });

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
      <CreateStudyRoomSelects timeSet={timeSet} onChangeSelect={handleChangeSelect} />
    </Modal>
  );
};

export default CreateStudyRoomModal;
