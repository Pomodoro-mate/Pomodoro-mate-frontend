import { guestLogin } from '@/apis/auth/guestLogin';
import { useMutation } from '@tanstack/react-query';

interface UseGuestLoginMutationProps {
  loginAction: (accessToken: string) => void;
}

const useGuestLoginMutation = ({ loginAction }: UseGuestLoginMutationProps) => {
  return useMutation({
    mutationFn: guestLogin,
    onSuccess: ({ accessToken }) => loginAction(accessToken),
  });
};

export default useGuestLoginMutation;
