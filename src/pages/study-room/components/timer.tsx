import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import useTimer from '../hook/useTimer';

const Timer = () => {
  const { startTimer, stopTimer, resetTimer, isActive, status, currentTime } = useTimer();

  return (
    <Card sx={{ minWidth: '50%' }}>
      <CardHeader title="타이머" />
      <CardContent sx={{ height: '130px', textAlign: 'center' }}>
        <h2>남은시간</h2>
        <h1>{currentTime}</h1>
      </CardContent>
      <CardActions>
        {isActive ? (
          <Button onClick={stopTimer}>일시정지</Button>
        ) : (
          <Button onClick={startTimer}>{`${status} 시작`}</Button>
        )}
        <Button onClick={resetTimer}>초기화</Button>
      </CardActions>
    </Card>
  );
};

export default Timer;
