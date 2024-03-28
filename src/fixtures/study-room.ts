import { StudyRoomInfo } from '@/types/study-room.types';
import participants from './participants';

const studyRoom: StudyRoomInfo = {
  id: 1,
  name: '스터디룸1',
  intro: '스터디룸 설명1',
  step: 'PLANNING',
  participantSummaries: [...participants],
  updateAt: '2024-03-27T05:47:11.638Z',
};

export default studyRoom;
