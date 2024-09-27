import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext.tsx';
import { ToastProvider } from '@/context/ToastContext.tsx';
import Sidebar from '@/components/layout/Sidebar';
import MobileHeader from '@/components/layout/MobileHeader';
import { routes } from '@/routes.ts';

function App() {
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

  return (
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
  );
}

export default App;
