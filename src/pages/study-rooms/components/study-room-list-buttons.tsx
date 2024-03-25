import { Button } from '@mui/material';
import { MODAL_KEYS } from '@/constant/modal';
import useModal from '@/hooks/useModal';

function StudyRoomListButtons() {
  const { onOpen } = useModal(MODAL_KEYS.CREATE_STUDY_ROOM);

  return (
    <div>
      <Button variant="outlined" onClick={onOpen}>
        스터디룸 생성
      </Button>
    </div>
  );
}

export default StudyRoomListButtons;
