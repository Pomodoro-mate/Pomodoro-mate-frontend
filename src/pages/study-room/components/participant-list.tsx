import { Button } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Person as PersonIcon } from '@/components/icons';
import ParticipantListItem from './participant-list-item';

import { ParticipantSummary } from '@/types/study-room.types';

interface ParticipantListProps {
  participants: ParticipantSummary[];
}

const ParticipantList = ({ participants }: ParticipantListProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" className="rounded-full py-1 px-3 flex gap-2">
          <PersonIcon width={20} height={20} fill="white" />
          <span>{participants.length}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {participants.map((participant) => (
          <ParticipantListItem key={participant.id} {...participant} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ParticipantList;
