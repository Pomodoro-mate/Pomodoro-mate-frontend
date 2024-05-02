import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { ParticipantSummary } from '@/types/study-room.types';

const ParticipantListItem = ({ nickname, imageUrl }: ParticipantSummary) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={nickname} src={imageUrl} />
      </ListItemAvatar>
      <ListItemText>{nickname}</ListItemText>
    </ListItem>
  );
};

export default ParticipantListItem;
