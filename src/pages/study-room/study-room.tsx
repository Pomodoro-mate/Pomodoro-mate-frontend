/* eslint-disable react-hooks/exhaustive-deps */
import Spinner from '@/components/common/spinner/spinner';
import Header from './components/header';
import ParticipantPopover from './components/participant-list';
import Timer from './components/timer';

import { Box, Container, Grid } from '@mui/material';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useStudyRoomQuery from './hooks/useStudyRoomQuery';
import useExitRoomModalContext from './hooks/useExitRoomModalContext';

const StudyRoom = () => {
  const { id: studyId } = useParams();

  const { openDialog } = useExitRoomModalContext();

  // 추후 수정 예정
  const { isLoading, data, isError } = useStudyRoomQuery({ studyId: Number(studyId) });

  const { name, participantSummaries } = data;

  useEffect(() => {
    const handlePopState = () => openDialog();
    window.addEventListener('popstate', handlePopState);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.addEventListener('popstate', handlePopState);
    };
  }, []);

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
