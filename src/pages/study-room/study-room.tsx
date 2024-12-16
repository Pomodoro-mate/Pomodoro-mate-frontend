import Spinner from '@/components/common/spinner/spinner';

import ParticipantPopover from './components/participant-list';
import Timer from './components/timer';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useExitRoomModalContext from './hooks/useExitRoomModalContext';
import useSockJSContext from './hooks/useSockJSContext';
import useStudyRoomQuery from './hooks/useStudyRoomQuery';

import getProgressTime from '@/pages/study-room/utils/get-progress-time';

const StudyRoom = () => {
  const { id: studyId } = useParams();

  const { open } = useExitRoomModalContext();

  // 추후 수정 예정
  const {
    isLoading,
    data: { participantSummaries, step, updateAt, timeSet },
    isError,
    refetch,
  } = useStudyRoomQuery({ studyId: Number(studyId) });

  const { curStepInfo, curParticipants, isChangeHost } = useSockJSContext();

  const participants = curParticipants.length > 0 ? curParticipants : participantSummaries;

  const stepInfo = curStepInfo ?? {
    step,
    progressTime: getProgressTime({ step, timeSet }),
    updateAt,
  };

  useEffect(() => {
    if (!isChangeHost) return;

    refetch();
  }, [isChangeHost, refetch]);

  useEffect(() => {
    window.addEventListener('popstate', open);

    return () => {
      window.removeEventListener('popstate', open);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <>
      <div className="flex justify-end">
        <ParticipantPopover participants={participants} />
      </div>
      <div className="flex justify-center">
        <Timer {...stepInfo} />
      </div>
    </>
  );
};

export default StudyRoom;
