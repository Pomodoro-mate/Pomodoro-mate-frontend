import { useParams } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import useStudyRoomQuery from './hooks/useStudyRoomQuery';
import Spinner from '@/components/common/spinner/spinner';
import Header from './components/header';
import Timer from './components/timer';
import ParticipantPopover from './components/participant-list';

const StudyRoom = () => {
  const { id: studyId } = useParams();

  // 추후 수정 예정
  const { isLoading, data, isError } = useStudyRoomQuery({ studyId: Number(studyId) });

  const { name, participantSummaries } = data;

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
          <ParticipantPopover participants={participantSummaries} />
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid item xs={6}>
              <Timer data={data} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default StudyRoom;
