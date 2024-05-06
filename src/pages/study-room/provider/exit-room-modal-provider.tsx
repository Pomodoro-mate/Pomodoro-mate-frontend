import Modal from '@/components/common/modal/modal';

import { Typography } from '@mui/material';

import { PropsWithChildren, createContext } from 'react';
import { useParams } from 'react-router-dom';

import useExitStudyRoom from '../hooks/useExitStudyRoom';
import useBooleanState from '@/hooks/useBooleanState';

const initialContext = {
  isOpen: false,
  open: () => {},
  close: () => {},
};

export const ExitRoomModalContext = createContext(initialContext);

const ExitRoomModalProvdier = ({ children }: PropsWithChildren) => {
  const [isOpen, open, close] = useBooleanState();

  const { id: studyId } = useParams() as { id: string };

  const { exitStudyRoom } = useExitStudyRoom({ studyId: Number(studyId), close });

  const clickExit = () => exitStudyRoom();

  return (
    <ExitRoomModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          title="스터디룸 나가기"
          closeBtn="취소"
          actionBtn="나가기"
          onClickActionBtn={clickExit}
          onClose={close}
        >
          <Typography>스터디 방을 나가시겠습니까?</Typography>
        </Modal>
      )}
    </ExitRoomModalContext.Provider>
  );
};

export default ExitRoomModalProvdier;
