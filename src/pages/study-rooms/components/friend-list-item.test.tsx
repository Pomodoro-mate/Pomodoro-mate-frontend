import { render } from '@testing-library/react';
import FriendListItem from './friend-list-item';

type ItemType = {
  id: number;
  name: string;
};
const item: ItemType = { id: 0, name: '홍길동' };

describe('FriendListItem', () => {
  it('renders FriendListItem', () => {
    render(<FriendListItem {...item} />);
  });
});
