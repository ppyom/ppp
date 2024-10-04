import React, { createContext, useState } from 'react';
import type * as ModalType from '@/types/modal.ts';

interface ProviderProps {
  children: React.ReactNode;
}

// Modal을 전역에서 불러와 사용하기 위한 Context
const ModalContext = createContext({
  open: <T,>(_: React.ComponentType<T>, __: Omit<T, 'id'>) => {},
  close: (_: string) => {},
});

interface ModalItem<T extends ModalType.Modal> {
  id: string;
  modal: React.ComponentType<T>;
  props: Omit<T, 'id'>;
}

const ModalProvider = ({ children }: ProviderProps) => {
  // TODO Modal Type 변경 필요
  const [modals, setModals] = useState<ModalItem<any>[]>([]);
  const open = <T,>(modal: React.ComponentType<T>, props: Omit<T, 'id'>) => {
    const id = Date.now().toString();
    setModals((prev) => [...prev, { id, modal, props }]);
    setTimeout(() => {
      document.querySelector(`#m_${id}`)!.classList.add('active');
    }, 1);
  };
  const close = (id: string) => {
    document.querySelector(`#m_${id}`)!.classList.remove('active');
    setTimeout(() => {
      setModals((prev) => prev.filter((m) => m.id !== id));
    }, 300);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        close,
      }}
    >
      {children}
      {modals.map((modal) => (
        <modal.modal key={modal.id} id={modal.id} {...modal.props} />
      ))}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
