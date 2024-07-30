import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui';
import { STUDY_ROOM_STEP } from '@/constant/study-room';
import { StudyRoomSummary } from '@/types/study-room.types';

type StudyRoomListItemProps = StudyRoomSummary & {
  onClick: (studyRoomId: number) => void;
};

const MAX_PARTICIPANT_COUNT = 8;

const StudyRoomListItem = ({
  id,
  name,
  step,
  participantCount,
  intro,
  onClick,
}: StudyRoomListItemProps) => {
  return (
    <Card className="rounded-2xl" onClick={() => onClick(id)}>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-slate-400">{intro}</CardContent>
      <CardFooter className="justify-between p-4 pt-0">
        <div>{STUDY_ROOM_STEP[step]}</div>
        <div>{`${participantCount} / ${MAX_PARTICIPANT_COUNT}`}</div>
      </CardFooter>
    </Card>
  );
};

export default StudyRoomListItem;
