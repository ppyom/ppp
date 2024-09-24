import { FiCalendar, FiCheckSquare } from 'react-icons/fi';
import { IoTelescopeOutline } from 'react-icons/io5';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {/* TODO router 추가한 다음 Link로 수정 필요 */}
      <a href="#">
        <div className={`${styles.item} ${true ? styles.active : ''}`}>
          <FiCalendar />
          <p>일정 관리</p>
        </div>
      </a>
      <a href="#">
        <div className={`${styles.item} ${false ? styles.active : ''}`}>
          <FiCheckSquare />
          <p>할 일</p>
        </div>
      </a>
      <a href="#">
        <div className={`${styles.item} ${false ? styles.active : ''}`}>
          <IoTelescopeOutline />
          <p>새로운 뉴스</p>
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
