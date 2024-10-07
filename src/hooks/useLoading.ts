import { useContext } from 'react';
import { LoadingContext } from '@/context/LoadingContext.tsx';

const useLoading = () => {
  return useContext(LoadingContext);
};

export default useLoading;
