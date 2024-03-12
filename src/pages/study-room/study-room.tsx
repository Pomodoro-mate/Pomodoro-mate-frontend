import { Box, Button, Card, CardContent, CardHeader, Chip, Container, Grid } from '@mui/material';
import ParticipantList from './components/participant-list';
import Timer from './components/timer';

const StudyRoom = () => {
  return (
    <Container maxWidth="lg">
      <Box component="section" sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Timer />
          </Grid>
          <Grid item xs={6}>
            <ParticipantList />
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: '50%' }}>
              <CardHeader title="학습 키워드" />
              <CardContent sx={{ height: '130px', textAlign: 'center' }}>
                <input type="text" />
                <Button size="small">등록</Button>
                <Chip label="Chip Outlined" variant="outlined" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: '50%' }}>
              <CardHeader title="채팅창" />
              <CardContent sx={{ height: '130px', textAlign: 'center' }}></CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default StudyRoom;
