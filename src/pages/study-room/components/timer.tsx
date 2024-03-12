import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { useMemo } from 'react';
import useTimer from '../hook/useTimer';

type KeyType = { [key in string]: string };
const STEP_TEXT: KeyType = {
  PLANNING: '계획',
  STUDYING: '스터디',
  RETROSPECT: '회고',
  RESTING: '휴식',
  COMPLETED: '완료',
};

const Timer = () => {
  /** api호출
   *
   * const { isLoading, isError, data, error, refetch } = useQuery({
   * queryKey: ['get-study-room-info'],
   * queryFn: () => studyRoomInfo({ studyId: 1 }),
   * });
   *
   */

  const { seconds, startTimer, status } = useTimer({
    updateAt: '2024-03-11T14:55:32.513Z',
    step: 'PLANNING',
  });

  const currentTime = useMemo(() => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    document.title = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }, [seconds]);

  return (
    <Card sx={{ minWidth: '50%' }}>
      <CardHeader title={STEP_TEXT[status]} />
      <CardContent sx={{ textAlign: 'center' }}>
        <h2>남은시간</h2>
        <h1>{currentTime}</h1>
      </CardContent>
      <CardActions>
        <Button onClick={startTimer}>{`${STEP_TEXT[status]} 시작`}</Button>
      </CardActions>
    </Card>
  );
};

export default Timer;
