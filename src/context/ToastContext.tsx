import { createContext, useState } from 'react';
import Toast from '@/components/common/Toast';
import type * as ToastType from '@/types/toast.ts';

// Toast를 전역에서 불러와 사용하기 위한 Context
const ToastContext = createContext({
  setToast: (_: Partial<ToastType.Toast>) => {},
});

const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = useState<ToastType.Toast[]>([]);

  const setToast = ({
    duration = 3000,
    message = '',
    type,
  }: ToastType.Toast) => {
    const id = Date.now().toString();
    setToastList((prev) => [...prev, { id, duration, message, type }]);
    setTimeout(() => done(id), duration + 500);
  };
  const done = (id: string) => {
    setToastList((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <ToastContext.Provider
      value={{
        setToast,
      }}
    >
      {children}
      {toastList.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
