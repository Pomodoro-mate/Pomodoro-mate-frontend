import { login } from '@/apis/auth/login';
import { tokenStorage } from '@/utils/storage';
import { useMutation } from '@tanstack/react-query';

interface useLoginMutationProps {
  handlePage: () => void;
}

const useLoginMutation = ({ handlePage }: useLoginMutationProps) => {
  return useMutation({
    mutationFn: login,
    onSuccess: ({ accessToken }) => {
      tokenStorage.setItem(accessToken);
      handlePage();
    },
    onError: (error: { code: string }) => {
      if (error) return error;
    },
  });
};

export default useLoginMutation;
