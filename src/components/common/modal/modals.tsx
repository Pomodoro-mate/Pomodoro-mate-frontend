import { ModalKey } from '@/types/modal.types';
import useModalContext from '@/hooks/useModalContext';
// import CreateStudyRoomModal from '@/pages/study-rooms/components/create-study-room-modal';

const modals = {
  // [MODAL_KEYS.CREATE_STUDY_ROOM]: <CreateStudyRoomModal />,
};

const Switch = ({ modals }: { modals: { [key: string]: JSX.Element } }) => {
  const { openedModalKeys } = useModalContext();

  return (
    <>
      {openedModalKeys.map((modalKey: ModalKey) => (
        <div key={modalKey}>{modals[modalKey]}</div>
      ))}
    </>
  );
};

const Modals = () => <Switch modals={modals} />;

export default Modals;
