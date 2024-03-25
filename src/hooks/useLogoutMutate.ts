import { logout } from '@/apis/logout/logout';
import { useMutation } from '@tanstack/react-query';

const useLogoutMutate = () => {
  return useMutation({ mutationFn: logout });
};

export default useLogoutMutate;
