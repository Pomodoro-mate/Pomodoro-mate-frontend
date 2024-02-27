import { getLocalStorge } from '@/utils/storage';

import { type PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const AppRoute = ({ children }: PropsWithChildren) => {
  const token = getLocalStorge('token');
  return token ? <Navigate to="/study-rooms" replace /> : children;
};

export default AppRoute;
