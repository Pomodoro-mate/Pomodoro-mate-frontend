import { Container, Card, CardContent, CardHeader } from '@mui/material';
import StudyRoomListButtons from '@/pages/study-rooms/components/study-room-list-buttons';
import StudyRoomList from '@/pages/study-rooms/components/study-room-list';

const StudyRooms = () => {
  return (
    <Container sx={{ maxWidth: '60rem' }}>
      <Card sx={{ width: '100%' }}>
        <CardHeader title="스터디룸 목록" />
        <CardContent>
          <StudyRoomListButtons />
          <StudyRoomList />
        </CardContent>
      </Card>
    </Container>
  );
};

export default StudyRooms;
