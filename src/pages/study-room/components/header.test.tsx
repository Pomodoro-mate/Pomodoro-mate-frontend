import { screen } from '@testing-library/react';
import { render } from '@/test-helper';
import Header from './Header';

describe('Header in Study Room', () => {
  const name = '방 제목';
  it('renders study room header', () => {
    render(<Header name={name} />);

    screen.getByText(name);
  });
});
