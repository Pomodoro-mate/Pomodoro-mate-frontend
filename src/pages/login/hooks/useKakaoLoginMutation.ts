import { kakaoLogin } from '@/apis/auth/kakao-login';
import { useMutation } from '@tanstack/react-query';

interface UseKakaoLoginMutationProps {
  loginAction: (accessToken: string) => void;
}

const useKakaoLoginMutation = ({ loginAction }: UseKakaoLoginMutationProps) => {
  return useMutation({
    mutationFn: kakaoLogin,
    onSuccess: ({ accessToken }) => loginAction(accessToken),
  });
};

export default useKakaoLoginMutation;
