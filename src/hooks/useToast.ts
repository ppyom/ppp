import { useContext } from 'react';
import { ToastContext } from '@/context/ToastContext.tsx';

const useToast = () => {
  return useContext(ToastContext);
};

export default useToast;
