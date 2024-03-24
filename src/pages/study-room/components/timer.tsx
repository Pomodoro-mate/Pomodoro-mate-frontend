import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { useEffect, useMemo } from 'react';
import useTimer from '../hooks/useTimer';
import { STEP_STATUS } from '@/constant/step';
import { Step } from '@/types/study-room.types';

type StepTextKey = keyof typeof STEP_STATUS;

const STEP_LABEL_MAP: Record<StepTextKey, string> = {
  PLANNING: '계획',
  STUDYING: '스터디',
  RETROSPECT: '회고',
  RESTING: '휴식',
  COMPLETED: '완료',
};

const Timer = ({
  data,
  refetch,
}: {
  data: { updateAt: string; step: Step; id: number };
  refetch: () => void;
}) => {
  const { updateAt, step, id } = data;
  const { seconds, startTimer, stepStatus } = useTimer({
    updateAt: `${updateAt}Z`,
    step: step,
    id: id,
    refetch,
  });

  const currentTime = useMemo(() => {
    const 분 = Math.floor(seconds / 60);
    const 초 = seconds % 60;
    return `${String(분).padStart(2, '0')}:${String(초).padStart(2, '0')}`;
  }, [seconds]);

  useEffect(() => {
    document.title = `${currentTime} - ${stepStatus}`;
  }, [currentTime, stepStatus]);

  const title = useMemo(() => {
    return STEP_LABEL_MAP[stepStatus];
  }, [stepStatus]);

  return (
    <Card sx={{ minWidth: '50%' }}>
      <CardHeader title={title} />
      <CardContent sx={{ textAlign: 'center' }}>
        <h2>남은시간</h2>
        <h1>{currentTime}</h1>
      </CardContent>
      <CardActions>
        <Button type="button" onClick={startTimer}>{`${STEP_LABEL_MAP[stepStatus]} 시작`}</Button>
      </CardActions>
    </Card>
  );
};

export default Timer;
