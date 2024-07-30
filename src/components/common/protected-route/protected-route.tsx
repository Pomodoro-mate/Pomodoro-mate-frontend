import { Navigate } from 'react-router-dom';
import { tokenStorage } from '@/utils/storage';
import { type PropsWithChildren } from 'react';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const token = tokenStorage.getItem();
  return token ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
