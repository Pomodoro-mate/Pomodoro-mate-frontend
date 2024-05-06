import { TextField } from '@mui/material';
import { MODAL_KEYS } from '@/constant/modal';
import useModal from '@/hooks/useModal';
import useCreateStudyRoomForm from '../hooks/useCreateStudyRoomForm';
import Modal from '@/components/common/modal/modal';
import CreateStudyRoomSelects from './create-study-room-selects';

const CreateStudyRoomModal = () => {
  const { isOpen, onClose } = useModal(MODAL_KEYS.CREATE_STUDY_ROOM);

  const {
    textFields: { name, intro },
    timeSet,
    handleChangeTextField,
    handleChangeSelect,
    createStudyRoom,
  } = useCreateStudyRoomForm();

  const handleClickCreateStudyRoom = async () => {
    createStudyRoom({ name, intro, timeSet });
  };

  return (
    <Modal
      isOpen={isOpen}
      title="스터디룸 생성"
      closeBtn="취소"
      actionBtn="방 만들기"
      onClickActionBtn={handleClickCreateStudyRoom}
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
