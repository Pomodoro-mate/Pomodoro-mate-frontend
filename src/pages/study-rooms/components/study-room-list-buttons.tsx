// import { Button } from '@mui/material';
import { Button } from '@/components/ui';
import { MODAL_KEYS } from '@/constant/modal';
import useModal from '@/hooks/useModal';

function StudyRoomListButtons() {
  const { onOpen } = useModal(MODAL_KEYS.CREATE_STUDY_ROOM);

  return <Button onClick={onOpen}>스터디룸 생성</Button>;
}

export default StudyRoomListButtons;
