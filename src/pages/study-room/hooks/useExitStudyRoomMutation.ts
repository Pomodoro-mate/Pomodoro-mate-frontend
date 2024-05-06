import { exitStudyRoom } from '@/apis/study-room/exit-study-room';
import { useMutation } from '@tanstack/react-query';

interface UseExitStudyRoomMutation {
  exitStudyRoomAction: () => void;
}

const useExitStudyRoomMutation = ({ exitStudyRoomAction }: UseExitStudyRoomMutation) => {
  return useMutation({
    mutationFn: exitStudyRoom,
    onSuccess: exitStudyRoomAction,
  });
};

export default useExitStudyRoomMutation;
