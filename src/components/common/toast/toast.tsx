import clsx from 'clsx';
import { useEffect, useState } from 'react';

type ToastProps = {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  autoClose?: boolean;
};

const Toast: React.FC<ToastProps> = ({ type = 'info', message, autoClose = false }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible && autoClose) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  const getAlertStyle = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'info':
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div
      className={clsx(
        'fixed p-4 rounded-md top-[5.375rem]',
        'w-[400px] right-[100px] z-[9999] ',
        getAlertStyle(),
      )}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={handleClose} className="ml-4 text-sm text-gray-500">
          X
        </button>
      </div>
    </div>
  );
};

export default Toast;
