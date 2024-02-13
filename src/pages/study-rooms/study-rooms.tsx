import DialogProvider from './components/dialog-provider';
import StudyRoomsList from './components/study-rooms-list';

const StudyRooms = () => {
  return (
    <DialogProvider>
      <div
        style={{
          width: '100%',
          display: 'flex',
          gap: '4px',
          justifyContent: 'center',
        }}
      >
        <StudyRoomsList />
        {/* <FriendList /> */}
      </div>
    </DialogProvider>
  );
};

export default StudyRooms;
