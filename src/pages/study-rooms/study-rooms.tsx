import { Container, Card, CardContent, CardHeader, Button } from '@mui/material';

import StudyRoomList from './components/study-room-list';

const StudyRooms = () => {
  return (
    <Container sx={{ maxWidth: '60rem' }}>
      <Card sx={{ width: '100%' }}>
        <CardHeader title="스터디 룸 목록" />
        <CardContent>
          <Button variant="outlined">스터디룸 생성</Button>
          <StudyRoomList />
        </CardContent>
      </Card>
    </Container>
  );
};

export default StudyRooms;
