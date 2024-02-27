import { getLocalStorage } from '@/utils/storage';

import { type PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const token = getLocalStorage('token');
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
