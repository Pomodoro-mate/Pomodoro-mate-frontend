import { useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

type UseToastProps = {
  type?: ToastType;
  message: string;
  autoClose?: boolean;
  duration?: number; // 자동 닫힘 시간 설정 (기본값 3000ms)
};

type UseToastReturn = {
  visible: boolean;
  handleClose: () => void;
  type: ToastType;
  message: string;
};

const useToast = ({
  type = 'info',
  message,
  autoClose = false,
  duration = 3000,
}: UseToastProps): UseToastReturn => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible && autoClose) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, autoClose, duration]);

  const handleClose = () => {
    setVisible(false);
  };

  return { visible, handleClose, type, message };
};

export default useToast;
