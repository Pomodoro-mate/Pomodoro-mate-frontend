interface StudyRoomProps {
  id: number;
  title: string;
  count: string;
}
const StudyRoomListItem = ({ id, title, count }: StudyRoomProps) => {
  return (
    <li key={id} style={{ marginBottom: '5px', height: '40px', border: '1px solid blue' }}>
      <div
        style={{
          display: 'flex',
          paddingBlock: '0.5rem',
          paddingInline: '0.5rem',
          justifyContent: 'space-between',
        }}
      >
        <span>{title}</span>
        <span>{`${count}/10`}</span>
      </div>
    </li>
  );
};

export default StudyRoomListItem;
