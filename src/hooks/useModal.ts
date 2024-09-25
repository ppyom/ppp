import { useContext } from 'react';
import { ModalContext } from '@/context/ModalContext.tsx';

const useModal = () => {
  return useContext(ModalContext);
};

export default useModal;
