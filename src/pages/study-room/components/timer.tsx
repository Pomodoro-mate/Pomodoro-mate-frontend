import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { useEffect, useMemo } from 'react';
import useTimer from '../hooks/useTimer';
import { STEP_STATUS } from '@/constant/step';

type StepTextKey = keyof typeof STEP_STATUS;

const STEP_LABEL_MAP: Record<StepTextKey, string> = {
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

  const { seconds, startTimer, stepStatus } = useTimer({
    updateAt: '2024-03-11T14:55:32.513Z',
    step: 'PLANNING',
  });

  const currentTime = useMemo(() => {
    const 분 = Math.floor(seconds / 60);
    const 초 = seconds % 60;
    return `${String(분).padStart(2, '0')}:${String(초).padStart(2, '0')}`;
  }, [seconds]);

  useEffect(() => {
    document.title = currentTime;
  }, [currentTime]);

  return (
    <Card sx={{ minWidth: '50%' }}>
      <CardHeader title={STEP_LABEL_MAP[stepStatus]} />
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
