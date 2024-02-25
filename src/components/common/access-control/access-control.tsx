import { getLocalStorge } from '@/utils/util';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AccessControl {
  children: React.ReactNode;
}
const AccessControl = ({ children }: AccessControl) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getLocalStorge('token');
    if (!token) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children;
};

export default AccessControl;
