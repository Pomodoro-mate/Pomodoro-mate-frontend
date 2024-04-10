import { screen } from '@testing-library/react';
import { render } from '@/test-helper';
import fixtures from '@/fixtures';
import ParticipantListItem from './participant-list-item';

const { participants } = fixtures;

const participant = participants[0];

describe('ParticipantListItem', () => {
  it('renders participant list item', () => {
    render(<ParticipantListItem {...participant} />);

    screen.getByText(participant.nickname);
  });
});
