import { studyStep } from '@/apis/study-room/update-study-step';
import { useMutation } from '@tanstack/react-query';

const useStudyStepMutation = () => {
  return useMutation({
    mutationFn: studyStep,
  });
};

export default useStudyStepMutation;
