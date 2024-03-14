import { useContext } from 'react';
import { Container, Card, CardContent, CardHeader, Button } from '@mui/material';
import DialogProvider, { DialogContext } from './components/dialog-provider';
import StudyRoomList from './components/study-room-list';

const StudyRooms = () => {
  const { handleDialog } = useContext(DialogContext);

  return (
    <DialogProvider>
      <Container sx={{ maxWidth: '60rem' }}>
        <Card sx={{ width: '100%' }}>
          <CardHeader title="스터디 룸 목록" />
          <CardContent>
            <Button variant="outlined" onClick={handleDialog}>
              스터디룸 생성
            </Button>
            <StudyRoomList />
          </CardContent>
        </Card>
      </Container>
    </DialogProvider>
  );
};

export default StudyRooms;
