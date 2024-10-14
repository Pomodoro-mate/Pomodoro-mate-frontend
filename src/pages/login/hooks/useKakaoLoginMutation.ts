import { kakaoLogin } from '@/apis/auth/kakao-login';
import { tokenStorage } from '@/utils/storage';
import { useMutation } from '@tanstack/react-query';

interface UseKakaoLoginMutationProps {
  handlePage: () => void;
}

const useKakaoLoginMutation = ({ handlePage }: UseKakaoLoginMutationProps) => {
  return useMutation({
    mutationFn: kakaoLogin,
    onSuccess: ({ accessToken }) => {
      tokenStorage.setItem(accessToken);
      handlePage();
    },
  });
};

export default useKakaoLoginMutation;
