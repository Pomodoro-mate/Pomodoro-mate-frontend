interface FriendListItemProps {
  id: number;
  name: string;
}

const FriendListItem = ({ id, name }: FriendListItemProps) => {
  return (
    <li key={id} style={{ marginBottom: '5px', height: '25px', border: '1px solid blue' }}>
      <span>{name}</span>
    </li>
  );
};

export default FriendListItem;
