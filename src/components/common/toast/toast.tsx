import useToast from '@/hooks/useToast';
import clsx from 'clsx';

type ToastProps = {
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  autoClose?: boolean;
  duration?: number;
};

const toastBgColor = {
  success: 'bg-green-100 text-green-800',
  error: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
  info: 'bg-blue-100 text-blue-800',
};

const Toast = ({ type = 'info', message, autoClose = false, duration }: ToastProps) => {
  const { visible, handleClose } = useToast({ type, message, autoClose, duration });

  if (!visible) return null;

  return (
    <div
      className={clsx(
        'fixed p-4 rounded-md top-[5.375rem]',
        'w-[400px] right-[100px] z-[9999]',
        toastBgColor[type],
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
