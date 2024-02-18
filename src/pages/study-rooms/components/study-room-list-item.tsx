import React from 'react';

interface StudyRoomProps {
  item: { id: number; title: string; count: string };
}
const StudyRoomListItem = ({ item }: StudyRoomProps) => {
  return (
    <li key={item.id} style={{ marginBottom: '5px', height: '40px', border: '1px solid blue' }}>
      <div
        style={{
          display: 'flex',
          paddingBlock: '0.5rem',
          paddingInline: '0.5rem',
          justifyContent: 'space-between',
        }}
      >
        <span>{item.title}</span>
        <span>{`${item.count}/10`}</span>
      </div>
    </li>
  );
};

export default StudyRoomListItem;
