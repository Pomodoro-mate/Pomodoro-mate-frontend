import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField } from '@mui/material';
import { createStudyRoom } from '@/apis/study-room/create-study-room';
import { ROUTE_PATH } from '@/constant/routes';
import { MODAL_KEYS } from '@/constant/modal';
import useModal from '@/hooks/useModal';
import Modal from '@/components/common/modal/modal';

const CreateStudyRoomModal = () => {
  const navigate = useNavigate();

  const { isOpen, onClose } = useModal(MODAL_KEYS.CREATE_STUDY_ROOM);

  const [name, setName] = useState('');
  const [intro, setIntro] = useState('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setName(value);
  };

  const handleChangeIntro = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setIntro(value);
  };

  const handleClickActionBtn = async () => {
    try {
      const { id } = await createStudyRoom({ name, intro });

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
      onClickActionBtn={handleClickActionBtn}
      onClose={onClose}
    >
      <Container sx={{ paddingBlock: '10px' }}>
        <TextField
          fullWidth
          label="방 제목"
          variant="outlined"
          margin="normal"
          onChange={handleChangeName}
        />
        <TextField
          fullWidth
          label="설명"
          variant="outlined"
          multiline
          rows={3}
          onChange={handleChangeIntro}
        />
      </Container>
    </Modal>
  );
};

export default CreateStudyRoomModal;
