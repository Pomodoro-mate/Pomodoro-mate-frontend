import { studyStep } from '@/apis/study-room/update-study-step';
import { useMutation } from '@tanstack/react-query';

const useStudyStepMutation = ({ refetch }: { refetch: () => void }) => {
  return useMutation({
    mutationFn: studyStep,
    onSuccess: () => {
      refetch();
    },
  });
};

export default useStudyStepMutation;
