import { studyStep } from '@/apis/study-room/study-step';
import { useMutation } from '@tanstack/react-query';

const useStudyStep = () => {
  const studyStepMutation = useMutation({
    mutationFn: studyStep,
  });
  return { studyStepMutation };
};

export default useStudyStep;
