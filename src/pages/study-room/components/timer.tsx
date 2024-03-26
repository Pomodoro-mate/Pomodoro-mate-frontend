import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { useEffect, useMemo } from 'react';
import useTimer from '../hooks/useTimer';
import { Step } from '@/types/study-room.types';
import { STUDY_ROOM_STEP } from '@/constant/study-room';

type StudyRoomType = { updateAt: string; step: Step; id: number };
interface TimerProps {
  data: StudyRoomType;
}

const Timer = ({ data }: TimerProps) => {
  const { updateAt, step } = data;
  const { seconds, startTimer, stepStatus } = useTimer({
    updateAt: `${updateAt}Z`,
    step: step,
  });

  const stepLabel = useMemo(() => STUDY_ROOM_STEP[stepStatus], [stepStatus]);

  const currentTime = useMemo(() => {
    const 분 = Math.floor(seconds / 60);
    const 초 = seconds % 60;
    return `${String(분).padStart(2, '0')}:${String(초).padStart(2, '0')}`;
  }, [seconds]);

  useEffect(() => {
    document.title = `${currentTime} - ${stepStatus}`;
  }, [currentTime, stepStatus]);

  return (
    <Card sx={{ minWidth: '50%' }}>
      <CardHeader title={stepLabel} />
      <CardContent sx={{ textAlign: 'center' }}>
        <h2>남은시간</h2>
        <h1>{currentTime}</h1>
      </CardContent>
      <CardActions>
        <Button type="button" onClick={startTimer}>{`${stepLabel} 시작`}</Button>
      </CardActions>
    </Card>
  );
};

export default Timer;
