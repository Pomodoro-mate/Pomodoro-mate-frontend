import { Button, List, Popover } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { ParticipantSummary } from '@/types/study-room.types';
import usePopover from '../hooks/usePopover';
import ParticipantListItem from './participant-list-item';

interface ParticipantListProps {
  participants: ParticipantSummary[];
}

const ParticipantList = ({ participants }: ParticipantListProps) => {
  const { anchorEl, openPopover, closePopover } = usePopover();

  const isOpen = Boolean(anchorEl);

  const buttonId = isOpen ? 'participant-list' : undefined;

  return (

    <div
      style={{ width: '100%', position: 'absolute', display: 'flex', justifyContent: 'flex-end' }}
    >
      <Button
        aria-describedby={buttonId}
        variant="contained"
        onClick={openPopover}
        sx={{ borderRadius: 5 }}
      >
        <PeopleAltIcon sx={{ marginRight: 1 }} />
        <span>{participants.length}</span>
      </Button>
      <Popover
        id={buttonId}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List sx={{ minWidth: 240 }}>
          {participants.map((participant) => (
            <ParticipantListItem key={participant.id} {...participant} />
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default ParticipantList;
