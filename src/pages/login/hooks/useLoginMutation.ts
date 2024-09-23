import { login } from '@/apis/auth/login';
import { tokenStorage } from '@/utils/storage';
import { useMutation } from '@tanstack/react-query';

interface UseLoginMutationProps {
  handlePage: () => void;
}

const useLoginMutation = ({ handlePage }: UseLoginMutationProps) => {
  return useMutation({
    mutationFn: login,
    onSuccess: ({ accessToken }) => {
      tokenStorage.setItem(accessToken);
      handlePage();
    },
  });
};

export default useLoginMutation;
