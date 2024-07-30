import { Button } from '@/components/ui';
import { ROUTE_PATH } from '@/constant/routes';
import useLogoutMutation from '@/hooks/useLogoutMutation';
import { tokenStorage } from '@/utils/storage';

import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const navigate = useNavigate();
  const { mutate: logoutMutate } = useLogoutMutation();
  const logout = async () => {
    try {
      await logoutMutate();
      tokenStorage.clear();

      navigate(ROUTE_PATH.HOME);
    } catch (err) {
      console.error(err);
    }
  };

  return <Button onClick={logout}>로그아웃</Button>;
};

export default LogoutBtn;
