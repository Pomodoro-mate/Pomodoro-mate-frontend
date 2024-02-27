import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { getLocalStorge } from '@/utils/util';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const token = getLocalStorge('token');
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
