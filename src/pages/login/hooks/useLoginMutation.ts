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
  });
};

export default useLoginMutation;
