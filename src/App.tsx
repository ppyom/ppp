import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import MobileHeader from './components/layout/MobileHeader';
import SchedulePage from './pages/SchedulePage';
import TodoPage from './pages/TodoPage';
import NewsPage from './pages/NewsPage';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <MobileHeader open={() => setOpenSidebar(true)} />
      <Sidebar isOpen={openSidebar} close={() => setOpenSidebar(false)} />
      <Routes>
        <Route path="/" element={<SchedulePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
