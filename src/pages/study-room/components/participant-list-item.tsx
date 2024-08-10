import { ParticipantSummary } from '@/types/study-room.types';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage } from '@/components/ui';
import { Crown } from '@/components/icons';

const ParticipantListItem = ({ nickname, imageUrl, isHost }: ParticipantSummary) => {
  return (
    <DropdownMenuItem>
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={'https://github.com/shadcn.png'} alt="@shadcn" />
        </Avatar>
        {isHost && <Crown width={16} height={16} fill="#FFD953" />}
        <span>{nickname}</span>
      </div>
    </DropdownMenuItem>
  );
};

export default ParticipantListItem;
