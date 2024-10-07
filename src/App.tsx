import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext.tsx';
import { ToastProvider } from '@/context/ToastContext.tsx';
import { LoadingProvider } from '@/context/LoadingContext.tsx';
import Sidebar from '@/components/layout/Sidebar';
import MobileHeader from '@/components/layout/MobileHeader';
import routes from '@/constants/routes.ts';

function App() {
  const { pathname } = useLocation();
  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarOpen = () => setOpenSidebar(true);
  const sidebarClose = () => setOpenSidebar(false);

  // window.resize 이벤트 발생 시 innerWidth가 500을 넘어가면 sidebar 닫음
  const handleSidebarClose = ({ target }: WindowEventMap['resize']) => {
    if (target instanceof Window) {
      target.innerWidth > 500 && sidebarClose();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleSidebarClose);
    return () => window.removeEventListener('resize', handleSidebarClose);
  }, []);

  useEffect(() => {
    sidebarClose();
  }, [pathname]);

  return (
    <LoadingProvider>
      <ToastProvider>
        <ModalProvider>
          <MobileHeader open={sidebarOpen} />
          <Sidebar isOpen={openSidebar} close={sidebarClose} />
          <Routes>
            {routes.map(({ path, PageElement }) => (
              <Route
                key={`route_${path}`}
                path={path}
                element={<PageElement />}
              />
            ))}
          </Routes>
        </ModalProvider>
      </ToastProvider>
    </LoadingProvider>
  );
}

export default App;
