import Modal from '@/components/common/modal/modal';

import { Typography } from '@mui/material';

import { PropsWithChildren, createContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ROUTE_PATH } from '@/constant/routes';

import useExitStudyRoom from '../hooks/useExitStudyRoom';
import useBooleanState from '@/hooks/useBooleanState';

const initialContext = {
  isOpen: false,
  openDialog: () => {},
  closeDialog: () => {},
};

export const ExitRoomModalContext = createContext(initialContext);

const ExitRoomModalProvdier = ({ children }: PropsWithChildren) => {
  const [isOpen, openDialog, closeDialog] = useBooleanState();

  const navigate = useNavigate();
  const { id: studyId } = useParams() as { id: string };
  const { exitStudyRoom } = useExitStudyRoom(studyId);

  const clickExit = () => {
    exitStudyRoom();
    closeDialog();
    navigate(ROUTE_PATH.STUDY_ROOMS);
  };

  return (
    <ExitRoomModalContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          title="스터디룸 생성"
          closeBtn="취소"
          actionBtn="나가기"
          onClickActionBtn={clickExit}
          onClose={closeDialog}
        >
          <Typography>스터디 방을 나가시겠습니까?</Typography>
        </Modal>
      )}
    </ExitRoomModalContext.Provider>
  );
};

export default ExitRoomModalProvdier;
