import Modal from '@/components/common/modal/modal';

import { PropsWithChildren, createContext } from 'react';
import { useParams } from 'react-router-dom';

import useExitStudyRoom from '../hooks/useExitStudyRoom';
import useBooleanState from '@/hooks/useBooleanState';
import { Warning } from '@/components/icons';

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
          title="알림"
          closeBtn="취소"
          actionBtn="나가기"
          onClose={close}
          onClickActionBtn={clickExit}
          activeClose={false}
          variant="secondary"
        >
          <div className="flex flex-col items-center gap-3">
            <Warning width={56} height={56} fill="#D53D0E" />
            <span>스터디룸을 나가시겠습니까?</span>
          </div>
        </Modal>
      )}
    </ExitRoomModalContext.Provider>
  );
};

export default ExitRoomModalProvdier;
