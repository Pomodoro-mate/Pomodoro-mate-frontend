import DialogProvider from './components/dialog-provider';
import StudyRoomsList from './components/study-room-list';

const StudyRooms = () => {
  // const { data } = useQuery({
  //   queryKey: ['studyRoomsList'],
  //   queryFn: () => getStudyRooms({ data: { page: 1 } }),
  // });

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
