// import { NavLink } from 'react-router-dom';
// import withLocalization from '../hoc/withLocalization';
// import s from './AuthNav.module.scss';

// const AuthNav = ({ localization }) => {
//   const { logInPage, signUpPage } = localization.localizedContent;
//   const setActive = ({ isActive }) => (isActive ? s.navLinkActive : s.navLink);

//   const navItemsAuth = [
//     { id: '1', href: 'login', text: logInPage },
//     { id: '2', href: 'signup', text: signUpPage },
//   ];

//   return (
//     <div className={s.authNav}>
//       <ul className={s.authNavList}>
//         {navItemsAuth.map(({ href, text }) => (
//           <li key={href} className={s.authNavListItem}>
//             <NavLink to={href} className={setActive}>
//               {text}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default withLocalization(AuthNav);

//////////////////////////

import React, { useState, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import withLocalization from '../hoc/withLocalization';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as AuthIcon } from '../../assets/images/icons/auth_icon.svg';
import { styled } from '@mui/material/styles';
import s from './AuthNav.module.scss';

const MenuItem = lazy(() =>
  import('@mui/material/MenuItem' /* webpackChunkName: "authMenuItem-mui" */),
);

const MyMenu = styled(Menu)({
  ul: {
    backgroundColor: 'rgba(82, 178, 252, 0.2)',
    backdropFilter: 'blur(50px)',
    paddingLeft: '20px',
    paddingRight: '20px',
    li: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    'li:not(:last-child)': {
      borderBottom: '1px dotted #52b2fc',
    },
  },
});

const MyButton = styled(Button)({
  color: '#fff',
  '&:hover': {
    color: '#F6AB0E',
  },
});

const AuthNav = ({ localization }) => {
  const { logInPage, signUpPage } = localization.localizedContent;
  const setActive = ({ isActive }) => (isActive ? s.navLinkActive : s.navLink);

  const navItemsAuth = [
    { id: '1', href: 'login', text: logInPage },
    { id: '2', href: 'signup', text: signUpPage },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MyButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // style={{ color: open ? '#F6AB0E' : '#fff' }}
      >
        <AuthIcon width={40} height={40} className={s.authIcon} />
      </MyButton>
      <MyMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {navItemsAuth.map(({ href, text }) => (
          <MenuItem
            onClick={handleClose}
            key={href}
            className={s.authNavListItem}
          >
            <NavLink to={href} className={setActive}>
              {text}
            </NavLink>
          </MenuItem>
        ))}
      </MyMenu>
    </>
  );
};

export default withLocalization(AuthNav);
