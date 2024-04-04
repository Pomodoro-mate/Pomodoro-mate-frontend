import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { ParticipantSummary } from '@/types/study-room.types';

interface ParticipantListItemProps {
  participant: ParticipantSummary;
}

const ParticipantListItem = ({ participant }: ParticipantListItemProps) => {
  const { nickname, imageUrl } = participant;

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
