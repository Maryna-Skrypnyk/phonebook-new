import { NavLink } from 'react-router-dom';
import withLocalization from '../hoc/withLocalization';
import s from './AuthNav.module.scss';

const AuthNav = ({ localization }) => {
  const { logInPage, signUpPage } = localization.localizedContent;
  const setActive = ({ isActive }) => (isActive ? s.navLinkActive : s.navLink);

  const navItemsAuth = [
    { id: '1', href: 'login', text: logInPage },
    { id: '2', href: 'signup', text: signUpPage },
  ];

  return (
    <div className={s.authNav}>
      <ul className={s.authNavList}>
        {navItemsAuth.map(({ href, text }) => (
          <li key={href} className={s.authNavListItem}>
            <NavLink to={href} className={setActive}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withLocalization(AuthNav);
