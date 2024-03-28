import { logout } from '@/apis/logout/logout';
import { useMutation } from '@tanstack/react-query';

const useLogoutMutation = () => {
  return useMutation({ mutationFn: logout });
};

export default useLogoutMutation;
