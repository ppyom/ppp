import React, { createContext, useState } from 'react';
import type * as ModalType from '@/types/modal.ts';

// Modal을 전역에서 불러와 사용하기 위한 Context
const ModalContext = createContext({
  open: <T,>(modal: React.ComponentType<T>, props: Omit<T, 'id'>) => {},
  close: (id: string) => {},
});

interface ModalItem<T extends ModalType.Modal> {
  id: string;
  modal: React.ComponentType<T>;
  props: T;
}

const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState<ModalItem<ModalType.Modal>[]>([]);
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
