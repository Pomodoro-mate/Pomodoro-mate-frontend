import { exitStudyRoom } from '@/apis/study-room/exit-study-room';
import { ROUTE_PATH } from '@/constant/routes';
import { removeLocalStorage } from '@/utils/storage';
import { useMutation } from '@tanstack/react-query';
import { NavigateOptions, To } from 'react-router-dom';

interface UseExitStudyRoomMutation {
  close: () => void;
  navigate: (to: To, options?: NavigateOptions) => void;
}

const useExitStudyRoomMutation = ({ close, navigate }: UseExitStudyRoomMutation) => {
  return useMutation({
    mutationFn: exitStudyRoom,
    onSuccess: () => {
      close();
      removeLocalStorage('participantId');
      navigate(ROUTE_PATH.STUDY_ROOMS);
    },
  });
};

export default useExitStudyRoomMutation;
