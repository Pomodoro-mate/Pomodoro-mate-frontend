import { useEffect, useMemo } from 'react';
import { Button, Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { STUDY_ROOM_STEP } from '@/constant/study-room';
import { Step } from '@/types/study-room.types';
import useTimer from '../hooks/useTimer';

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
    <Container sx={{ minWidth: '50%', textAlign: 'center', paddingBlock: 4 }}>
      <h2>{stepLabel} 단계</h2>
      <h1>{currentTime}</h1>
      <Button size="large" type="button" variant="contained" onClick={startTimer}>
        &nbsp; NEXT STEP <KeyboardArrowRightIcon />
      </Button>
    </Container>
  );
};

export default Timer;
