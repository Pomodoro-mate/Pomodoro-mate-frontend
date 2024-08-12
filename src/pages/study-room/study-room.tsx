import Spinner from '@/components/common/spinner/spinner';
import Header from './components/header';
import ParticipantPopover from './components/participant-list';
import Timer from './components/timer';

import { Box, Container, Grid } from '@mui/material';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ROUTE_PATH } from '@/constant/routes';
import { participantIdStorage } from '@/utils/storage';

import useSockJSContext from './hooks/useSockJSContext';
import useStudyRoomQuery from './hooks/useStudyRoomQuery';
import useExitRoomModalContext from './hooks/useExitRoomModalContext';

import getProgressTime from '@/pages/study-room/utils/get-progress-time';

const StudyRoom = () => {
  const navigate = useNavigate();

  const { id: studyId } = useParams();

  const { open } = useExitRoomModalContext();

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

  const participantId = participantIdStorage.getItem();

  useEffect(() => {
    window.addEventListener('popstate', open);

    return () => {
      window.removeEventListener('popstate', open);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const hasOwnId = participantSummaries?.some((participant) => participant.id === participantId);

    if (participantSummaries && !hasOwnId) {
      // TODO : 스터디룸 접속 시간이 길어져 자동으로 퇴장됐다는 알림 메세지 띄우기

      participantIdStorage.clear();

      !hasOwnId && navigate(ROUTE_PATH.STUDY_ROOMS);
    }
  }, [participantSummaries, participantId, navigate]);

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
