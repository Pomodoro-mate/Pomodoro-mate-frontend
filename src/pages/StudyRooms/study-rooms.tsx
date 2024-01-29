import React from 'react';
import StudyRoomsList from './components/study-rooms-list';
import FriendList from './components/friend-list';

const StudyRooms = () => {
  return (
    <div style={{ width: '100%', display: 'flex', gap: '4px', justifyContent: 'center' }}>
      <StudyRoomsList />
      <FriendList />
    </div>
  );
};

export default StudyRooms;
