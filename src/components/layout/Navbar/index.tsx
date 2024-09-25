import { Link, useLocation } from 'react-router-dom';
import { FiCalendar, FiCheckSquare } from 'react-icons/fi';
import { IoTelescopeOutline } from 'react-icons/io5';
import styles from './styles.module.css';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <div
          className={`${styles.item} ${pathname === '/' ? styles.active : ''}`}
        >
          <FiCalendar />
          <p>일정 관리</p>
        </div>
      </Link>
      <Link to="/todo">
        <div
          className={`${styles.item} ${pathname === '/todo' ? styles.active : ''}`}
        >
          <FiCheckSquare />
          <p>할 일</p>
        </div>
      </Link>
      <Link to="news">
        <div
          className={`${styles.item} ${pathname === '/news' ? styles.active : ''}`}
        >
          <IoTelescopeOutline />
          <p>새로운 뉴스</p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
