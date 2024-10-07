import React, { createContext, useState } from 'react';
import Loading from '@/components/common/Loading';

interface ProviderProps {
  children: React.ReactNode;
}

const LoadingContext = createContext({
  setLoading: (_: boolean) => {},
});

const LoadingProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={{ setLoading }}>
      {children}
      {loading && <Loading />}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
