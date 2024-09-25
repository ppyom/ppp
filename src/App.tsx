import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext.tsx';
import { ToastProvider } from '@/context/ToastContext.tsx';
import Sidebar from '@/components/layout/Sidebar';
import MobileHeader from '@/components/layout/MobileHeader';
import { routes } from '@/routes.ts';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <ModalProvider>
      <ToastProvider>
        <MobileHeader open={() => setOpenSidebar(true)} />
        <Sidebar isOpen={openSidebar} close={() => setOpenSidebar(false)} />
        <Routes>
          {routes.map(({ path, PageElement }) => (
            <Route
              key={`route_${path}`}
              path={path}
              element={<PageElement />}
            />
          ))}
        </Routes>
      </ToastProvider>
    </ModalProvider>
  );
}

export default App;
