import toast, { Renderable } from 'react-hot-toast'

import { ToastError } from '../assets/icons/ToastError';
import { ToastInfo } from '../assets/icons/ToastInfo';
import { ToastSuccess } from '../assets/icons/ToastSuccess';
import { ToastWarning } from '../assets/icons/ToastWarning';

export const useCustomToast = () => {
  const notifyInfo = (message: Renderable) => {
    toast(message, {
      id: 'info',
      icon: <ToastInfo />,
      style: { backgroundColor: '#CAE3F4', color: '#616161' },
    });
  };

  const notifyError = (message: string) => {
    toast(message, {
      icon: <ToastError />,
      style: { backgroundColor: '#F9D7D4', color: '#616161' },
    });
  };

  const notifySuccess = (message: string) => {
    toast(message, {
      id: 'success',
      icon: <ToastSuccess />,
      style: { backgroundColor: '#CAF4D3', color: '#616161' },
    });
  };

  const notifyWarning = (message: string) => {
    toast(message, {
      icon: <ToastWarning />,
      style: { backgroundColor: '#F4DDBA', color: '#616161' },
    });
  };

  const notifyPromise = async (promise: Promise<any>, successMessage: string, errorMessage: string, infoMessage: string) => {
    await toast.promise(promise, {
      loading: 'Submitting...',
      success: () => { toast(infoMessage, {
        icon: <ToastInfo />,
        style: { backgroundColor: '#CAE3F4', color: '#616161' },
      }); return successMessage },
      error: errorMessage,
    })
  }

  return {
    notifyInfo,
    notifyError,
    notifySuccess,
    notifyWarning,
    notifyPromise,
  };
};
