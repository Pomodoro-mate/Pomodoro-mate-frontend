import { useParams } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import useStudyRoomQuery from './hooks/useStudyRoomQuery';
import useSockJSContext from './hooks/useSockJSContext';
import getProgressTime from '@/pages/study-room/utils/get-progress-time';
import Spinner from '@/components/common/spinner/spinner';
import Header from './components/header';
import Timer from './components/timer';
import ParticipantPopover from './components/participant-list';

const StudyRoom = () => {
  const { id: studyId } = useParams();

  // 추후 수정 예정
  const {
    isLoading,
    data: { name, participantSummaries, step, updateAt, timeSet },
    isError,
  } = useStudyRoomQuery({ studyId: Number(studyId) });

  const { curStepInfo, curParticipants } = useSockJSContext();

  const participants = curParticipants.length > 0 ? curParticipants : participantSummaries;

  const stepInfo = curStepInfo ?? {
    step,
    progressTime: getProgressTime({ step, timeSet }),
    updateAt,
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <>
      <Header name={name} />
      <Container maxWidth="xl">
        <Box component="section" sx={{ position: 'relative', paddingBlock: 2 }}>
          <ParticipantPopover participants={participants} />
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid item xs={6}>
              <Timer {...stepInfo} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default StudyRoom;
