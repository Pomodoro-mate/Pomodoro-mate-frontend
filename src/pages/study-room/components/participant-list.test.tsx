import fixtures from '@/fixtures';
import { render } from '@/test-helper';
import { fireEvent, screen } from '@testing-library/react';
import ParticipantList from './participant-list';

const context = describe;

const { participants } = fixtures;

const [participant1, participant2] = participants;

const renderParticipantList = () => render(<ParticipantList participants={participants} />);

describe('ParticipantList', () => {
  describe('when anchorEl is null', () => {
    it('renders only participant list button', () => {
      renderParticipantList();

      screen.getByText(participants.length);

      expect(screen.queryByText(participant1.nickname)).not.toBeInTheDocument();
    });

    context('when click participant list button', () => {
      it('renders participant list', () => {
        renderParticipantList();

        const buttonNameRegExp = new RegExp(String(participants.length));

        const button = screen.getByRole('button', { name: buttonNameRegExp });

        fireEvent.click(button);
      });
    });
  });

  describe('when anchorEl is participant list button', () => {
    beforeEach(() => {});

    it('renders participant list', () => {
      renderParticipantList();

      screen.getByText(participant1.nickname);
      screen.getByText(participant2.nickname);
    });
  });
});
