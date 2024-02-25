import React from 'react';

interface FriendProps {
  id: number;
  name: string;
}
const FriendListItem = (item: FriendProps) => {
  const { id, name } = item;
  return (
    <li key={id} style={{ marginBottom: '5px', height: '25px', border: '1px solid blue' }}>
      <span>{name}</span>
    </li>
  );
};

export default FriendListItem;
