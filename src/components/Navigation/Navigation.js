import { NavLink } from 'react-router-dom';
import withLocalization from '../hoc/withLocalization';
import s from './Navigation.module.scss';

const Navigation = ({ localization }) => {
  const { menuHome, menuContacts } = localization.localizedContent;
  const setActive = ({ isActive }) => (isActive ? s.navLinkActive : s.navLink);
  const isLoggedIn = true; // тимчасово

  const navItems = [
    { href: '/', text: menuHome, loginStatus: true },
    { href: 'contacts', text: menuContacts, loginStatus: isLoggedIn },
  ];

  return (
    <nav className={s.navigation}>
      <ul className={s.navList}>
        {navItems.map(
          ({ href, text, loginStatus }) =>
            loginStatus && (
              <li className={s.navListItem}>
                <NavLink to={href} key={href} className={setActive}>
                  {text}
                </NavLink>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
};

export default withLocalization(Navigation);
