import { NavLink } from 'react-router-dom';
import withLocalization from '../hoc/withLocalization';
import s from './Navigation.module.scss';

const Navigation = ({ localization }) => {
  const { menuHome, menuContacts } = localization.localizedContent;
  const setActive = ({ isActive }) => (isActive ? s.navLinkActive : s.navLink);
  const isLoggedIn = true; // тимчасово

  return (
    <nav className={s.navigation}>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <NavLink to="/" className={setActive}>
            {menuHome}
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className={s.navListItem}>
            <NavLink to="/contacts" className={setActive}>
              {menuContacts}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default withLocalization(Navigation);
