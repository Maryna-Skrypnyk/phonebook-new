import { useState, lazy } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux_thunk/auth';
import withLocalization from '../hoc/withLocalization';
import ButtonIcon from '../ButtonIcon';
import { ReactComponent as Logout } from '../../assets/images/icons/logout.svg';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import s from './UserMenu.module.scss';

// const Button = lazy(() =>
//   import('@mui/material/Button' /* webpackChunkName: "buttonUser-mui" */),
// );
// const Menu = lazy(() =>
//   import('@mui/material/Menu' /* webpackChunkName: "menuUser-mui" */),
// );
// const MenuItem = lazy(() =>
//   import('@mui/material/MenuItem' /* webpackChunkName: "menuItemUser-mui" */),
// );
// const Avatar = lazy(() =>
//   import('@mui/material/Avatar' /* webpackChunkName: "avatar-mui" */),
// );

const MyAvatar = styled(Avatar)({
  background: '#F6AB0E',
  color: '#ffffff',
  width: 34,
  height: 34,
  borderRadius: '50%',
  // marginRight: 10,
  fontSize: 16,
  border: 0,
  boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5);',
});

const MyMenu = styled(Menu)({
  ul: {
    padding: 10,
    li: {
      backgroundColor: 'transparent',
    },
    'li:not(:last-child)': {
      borderBottom: '1px dotted #52b2fc',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    'li:last-child': {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
});

const UserMenu = ({ onClick, localization }) => {
  const { logOut } = localization.localizedContent;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = e => {
    setAnchorEl(null);
  };

  const name = useSelector(authSelectors.getUserName);

  const initials =
    name.split(' ').length === 2 && name.split(' ')[1][0]
      ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
      : `${name.split(' ')[0][0]}`;

  return (
    <div className={s.UserMenu}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <MyAvatar
          alt={name}
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
        >
          {initials}
        </MyAvatar>
      </Button>

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
        <MenuItem className={s.authNavListItem}>
          <div className={s.Name}>{name}</div>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ButtonIcon
            onClick={onClick}
            aria-label="Open modal"
            btnClass="btnLogout"
          >
            <div className={s.boxLogout}>
              <Logout className={s.svgLogout} />
              <span className={s.textNav}>{logOut}</span>
            </div>
          </ButtonIcon>
        </MenuItem>
      </MyMenu>
    </div>
  );
};

UserMenu.propTypes = {
  onClick: PropTypes.func,
};

export default withLocalization(UserMenu);
