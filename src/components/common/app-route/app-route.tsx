import { tokenStorage } from '@/utils/storage';
import { type PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const AppRoute = ({ children }: PropsWithChildren) => {
  const token = tokenStorage.getItem();
  return token ? <Navigate to="/study-rooms" replace /> : children;
};

export default AppRoute;
