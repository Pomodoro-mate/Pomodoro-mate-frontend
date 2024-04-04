import { fireEvent, screen } from '@testing-library/react';
import { render } from '@/test-helper';
import fixtures from '@/fixtures';
import { UsePopover } from '../hooks/usePopover';
import ParticipantList from './participant-list';

const context = describe;

const { participants } = fixtures;

const mockUsePopover: UsePopover = {
  anchorEl: null,
  onOpen: jest.fn(),
  onClose: jest.fn(),
};

jest.mock('../hooks/usePopover', () => () => mockUsePopover);

const renderParticipantList = () => render(<ParticipantList participants={participants} />);

describe('ParticipantList', () => {
  describe('when anchorEl is null', () => {
    it('renders only participant list button', () => {
      renderParticipantList();

      screen.getByText(participants.length);

      expect(screen.queryByText(participants[0].nickname)).not.toBeInTheDocument();
    });

    context('when click participant list button', () => {
      it('renders participant list', () => {
        renderParticipantList();

        const buttonNameRegExp = new RegExp(`${participants.length}`);

        const button = screen.getByRole('button', { name: buttonNameRegExp });

        fireEvent.click(button);

        expect(mockUsePopover.onOpen).toHaveBeenCalled();
      });
    });
  });

  describe('when anchorEl is participant list button', () => {
    beforeEach(() => {
      mockUsePopover.anchorEl = document.createElement('button');
    });

    it('renders participant list', () => {
      renderParticipantList();

      screen.getByText(participants[0].nickname);
      screen.getByText(participants[1].nickname);
    });
  });
});
