import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../../routes.ts';
import styles from './styles.module.css';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      {routes.map(({ path, Icon, title }) => (
        <Link key={`nav_${path}`} to={path}>
          <div
            className={`${styles.item} ${pathname === path ? styles.active : ''}`}
          >
            <Icon />
            <p>{title}</p>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
