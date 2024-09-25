import { FiCalendar, FiCheckSquare } from 'react-icons/fi';
import { IoTelescopeOutline } from 'react-icons/io5';
import SchedulePage from './pages/SchedulePage';
import TodoPage from './pages/TodoPage';
import NewsPage from './pages/NewsPage';

const routes = [
  {
    path: '/',
    title: '일정 관리',
    Icon: FiCalendar,
    PageElement: SchedulePage,
  },
  {
    path: '/todo',
    title: '할 일',
    Icon: FiCheckSquare,
    PageElement: TodoPage,
  },
  {
    path: '/news',
    title: '새로운 뉴스',
    Icon: IoTelescopeOutline,
    PageElement: NewsPage,
  },
];

export { routes };
