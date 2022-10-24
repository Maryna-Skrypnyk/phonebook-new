import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux_thunk/auth';
import withLocalization from '../hoc/withLocalization';
import s from './Navigation.module.scss';

const Navigation = ({ localization }) => {
  const { menuHome, menuContacts } = localization.localizedContent;
  const setActive = ({ isActive }) => (isActive ? s.navLinkActive : s.navLink);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const navItems = [
    { id: '1', href: '/', text: menuHome, loginStatus: true },
    { id: '2', href: '/contacts', text: menuContacts, loginStatus: isLoggedIn },
  ];

  return (
    <nav className={s.navigation}>
      <ul className={s.navList}>
        {navItems.map(
          ({ href, text, loginStatus }) =>
            loginStatus && (
              <li key={href} className={s.navListItem}>
                <NavLink to={href} className={setActive}>
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
