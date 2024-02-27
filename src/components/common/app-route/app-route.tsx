import { getLocalStorge } from '@/utils/util';
import { PropsWithChildren } from 'react';

import { Navigate } from 'react-router-dom';

const AppRoute = ({ children }: PropsWithChildren) => {
  const token = getLocalStorge('token');
  return !token ? children : <Navigate to="/study-rooms" replace />;
};

export default AppRoute;
