import { logout } from '@/apis/auth/logout';
import { useMutation } from '@tanstack/react-query';

const useLogoutMutation = () => {
  return useMutation({ mutationFn: logout });
};

export default useLogoutMutation;
