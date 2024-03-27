import { Chip, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { StudyRoom } from '@/types/study-rooms.types';
import { STUDY_ROOM_STEP } from '@/constant/study-room';

type StudyRoomListItemProps = StudyRoom & {
  onClick: (studyRoomId: number) => void;
};

const MAX_PARTICIPANT_COUNT = 8;

const StudyRoomListItem = ({
  id,
  name,
  step,
  participantCount,
  onClick,
}: StudyRoomListItemProps) => {
  return (
    <ListItem onClick={() => onClick(id)}>
      <ListItemButton
        sx={{
          border: '1px solid lightgray' /* 테마 추가 후 색상 변경 예정 */,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <ListItemText>{name}</ListItemText>
        </div>
        <div style={{ display: 'flex' }}>
          <Chip sx={{ marginRight: '8px' }} label={STUDY_ROOM_STEP[step]}></Chip>
          <ListItemText>{`${participantCount}/${MAX_PARTICIPANT_COUNT}`}</ListItemText>
        </div>
      </ListItemButton>
    </ListItem>
  );
};

export default StudyRoomListItem;
