import Spinner from '@/components/common/spinner/spinner';
import Header from './components/header';
import ParticipantPopover from './components/participant-list';
import Timer from './components/timer';

import Modal from '@/components/common/modal/modal';
import { Box, Container, Grid, Typography } from '@mui/material';

import { useEffect, useState } from 'react';
import { useBlocker, useNavigate, useParams } from 'react-router-dom';

import useStudyRoomQuery from './hooks/useStudyRoomQuery';

import { ROUTE_PATH } from '@/constant/routes';
import { getLocalStorage } from '@/utils/storage';
import useExitStudyRoom from './hooks/useExitStudyRoom';

const StudyRoom = () => {
  const { id: studyId } = useParams();

  // 추후 수정 예정
  const { isLoading, data, isError } = useStudyRoomQuery({ studyId: Number(studyId) });

  const { name, participantSummaries } = data;

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) => currentLocation.pathname !== nextLocation.pathname,
  );

  // 모달

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const { mutate } = useExitStudyRoom();

  const exitStudyRoom = () => {
    const participantId = getLocalStorage('participantId');
    mutate({ studyRoomId: Number(studyId), participantId: Number(participantId) });

    if (blocker?.proceed) blocker.proceed();

    toggle();
    navigate(ROUTE_PATH.STUDY_ROOMS);
  };

  useEffect(() => {
    const handlePopState = () => toggle();
    window.addEventListener('popstate', handlePopState);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    // return () => {
    //   window.addEventListener('popstate', handlePopState);
    // };
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
      <Modal
        isOpen={isOpen}
        title="스터디룸 생성"
        closeBtn="취소"
        actionBtn="나가기"
        onClickActionBtn={exitStudyRoom}
        onClose={toggle}
      >
        <Typography>스터디 방을 나가시겠습니까?</Typography>
      </Modal>
    </>
  );
};

export default StudyRoom;
