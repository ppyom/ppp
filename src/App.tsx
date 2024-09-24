import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import MobileHeader from './components/layout/MobileHeader';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <MobileHeader open={() => setOpenSidebar(true)} />
      <Sidebar isOpen={openSidebar} close={() => setOpenSidebar(false)} />
    </>
  );
}

export default App;
