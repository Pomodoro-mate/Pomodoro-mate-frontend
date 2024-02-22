import { getLocalStorge } from '@/utils/util';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AccessControl {
  children: React.ReactNode;
}
const AccessControl = ({ children }: AccessControl) => {
  const token = getLocalStorge('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);
  return children;
};

export default AccessControl;
