import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
const Timer = () => {
  return (
    <Card sx={{ minWidth: '50%' }}>
      <CardHeader title="타이머" />
      <CardContent sx={{ height: '130px', textAlign: 'center' }}>
        <h2>00 : 00</h2>
      </CardContent>
      <CardActions>
        <Button size="small">시작</Button>
        <Button size="small">리셋</Button>
        <Button size="small">시간설정</Button>
      </CardActions>
    </Card>
  );
};

export default Timer;
