import { render, screen } from '@testing-library/react';
import Header from '@/components/header/Header';

const context = describe;
describe('Header', () => {
  const renderComponent = () => render(<Header />);

  context('login page', () => {
    renderComponent();
    const element = screen.getByText('');
    expect(element).toBeInTheDocument();
  });

  // context('Not login page', () => {
  //   renderComponent('/studyRooms');
  //   const element = screen.getByText('Pomodoro Mate');
  //   expect(element).toBeInTheDocument();
  // });
  it('renders header', () => {});
});
