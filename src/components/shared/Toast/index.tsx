import React from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = (props: ToastProps) => {
  const { onClose, message } = props;

  return (
    <div className="flex gap-2 items-center justify-center absolute top-10 left-1/2 transform -translate-x-1/2 p-4 mb-4 z-50 text-gray-500 bg-green-success rounded-lg shadow">
      <div className="ms-3 text-sm font-normal text-white">{message}</div>
      <button
        onClick={onClose}
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        x
      </button>
    </div>
  );
};

export default Toast;
