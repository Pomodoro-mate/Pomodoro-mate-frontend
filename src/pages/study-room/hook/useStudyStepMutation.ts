import { studyStep } from '@/apis/study-room/study-step';
import { useMutation } from '@tanstack/react-query';

const useStudyStepMutation = () => {
  const studyStepMutation = useMutation({
    mutationFn: studyStep,
  });
  return { studyStepMutation };
};

export default useStudyStepMutation;
