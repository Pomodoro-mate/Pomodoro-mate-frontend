import { Card, CardContent, CardHeader } from '@mui/material';
import FriendListItem from './friend-list-item';

type ItemType = {
  id: number;
  name: string;
};
const items: ItemType[] = [
  { id: 0, name: '홍길동' },
  { id: 1, name: '홍길동' },
  { id: 2, name: '홍길동' },
  { id: 3, name: '홍길동' },
  { id: 4, name: '홍길동' },
  { id: 5, name: '홍길동' },
  { id: 6, name: '홍길동' },
  { id: 7, name: '홍길동' },
  { id: 8, name: '홍길동' },
  { id: 9, name: '홍길동' },
  { id: 10, name: '홍길동' },
];
const FriendList = () => {
  return (
    <div style={{ width: '25%' }}>
      <Card>
        <CardHeader title="친구 목록" />
        <CardContent>
          <ul>
            {items.map((item) => (
              <FriendListItem {...item} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FriendList;
