import { ROUTE_PATH } from '@/constant/routes';
import { getLocalStorge } from '@/utils/util';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccessControl = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getLocalStorge('token');
    if (!token) {
      navigate(ROUTE_PATH.LOGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children;
};

export default AccessControl;
