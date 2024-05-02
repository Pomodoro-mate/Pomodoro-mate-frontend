import { exitStudyRoom } from '@/apis/study-room/exit-study-room';
import { ROUTE_PATH } from '@/constant/routes';
import { useMutation } from '@tanstack/react-query';
import { NavigateOptions, To } from 'react-router-dom';

interface UseExitStudyRoomMutation {
  proceed?: () => void;
  close: () => void;
  navigate: (to: To, options?: NavigateOptions) => void;
}

const useExitStudyRoomMutation = ({ proceed, close, navigate }: UseExitStudyRoomMutation) => {
  return useMutation({
    mutationFn: exitStudyRoom,
    onSuccess: () => {
      proceed?.();
      close();
      navigate(ROUTE_PATH.STUDY_ROOMS);
    },
  });
};

export default useExitStudyRoomMutation;
