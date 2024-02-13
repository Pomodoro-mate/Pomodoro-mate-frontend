import { Button, Card, CardContent, CardHeader, Chip } from '@mui/material';
import ParticipantList from './components/participant-list';
import Timer from './components/timer';

const StudyRoom = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '4px',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', height: '300px', marginBottom: '0.5rem', gap: '10px' }}>
        <div style={{ width: '65%' }}>
          <Timer />
        </div>
        <div style={{ width: '35%' }}>
          <ParticipantList />
        </div>
      </div>
      <div style={{ display: 'flex', height: '300px', gap: '10px' }}>
        <div style={{ width: '65%' }}>
          <Card sx={{ minWidth: '50%' }}>
            <CardHeader title="학습 키워드" />
            <CardContent sx={{ height: '130px', textAlign: 'center' }}>
              <input type="text" />
              <Button size="small">등록</Button>
              <Chip label="Chip Outlined" variant="outlined" />
            </CardContent>
            {/* <CardActions>
              <Button size="small">시작</Button>
            </CardActions> */}
          </Card>
        </div>
        <div style={{ width: '35%' }}>
          <Card sx={{ minWidth: '50%' }}>
            <CardHeader title="채팅창" />
            <CardContent sx={{ height: '130px', textAlign: 'center' }}></CardContent>
            {/* <CardActions>
              <Button size="small">시작</Button>
            </CardActions> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyRoom;
