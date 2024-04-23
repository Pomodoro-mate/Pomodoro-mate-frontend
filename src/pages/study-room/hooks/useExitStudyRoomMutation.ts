import { exitStudyRoom } from '@/apis/study-room/exit-study-room';
import { useMutation } from '@tanstack/react-query';

const useExitStudyRoomMutation = () => {
  return useMutation({
    mutationFn: exitStudyRoom,
  });
};

export default useExitStudyRoomMutation;
