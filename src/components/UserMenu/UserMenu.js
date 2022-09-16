import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import authSelectors from '../../../redux/auth/auth-selectors';
import withLocalization from '../hoc/withLocalization';
import ButtonIcon from '../ButtonIcon';
import useSizeScreen from '../../hooks/useSizeScreen';
import { ReactComponent as Logout } from '../../assets/images/icons/logout.svg';
import Avatar from '@mui/material/Avatar';
import noAvatar from '../../assets/images/noAvatar.png';
import { styled } from '@mui/material/styles';
import s from './UserMenu.module.scss';

const MyAvatar = styled(Avatar)({
  background: '#F6AB0E',
  color: '#ffffff',
  width: 30,
  height: 30,
  borderRadius: '50%',
  // marginRight: 10,
  fontSize: 16,
  border: 0,
  boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5);',
});

const UserMenu = ({ onClick, localization }) => {
  const { logOut } = localization.localizedContent;
  const sizeScreen = useSizeScreen();

  // const name = useSelector(authSelectors.getUsername);
  const name = 'Maryna Skrypnyk'; // тимчасово

  const initials =
    name.split(' ').length === 2 && name.split(' ')[1][0]
      ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
      : `${name.split(' ')[0][0]}`;

  return (
    <div className={s.UserMenu}>
      {sizeScreen <= 767 ? (
        <div className={s.UserName}>
          <MyAvatar alt={name} src={noAvatar}>
            {initials}
          </MyAvatar>
        </div>
      ) : (
        <div className={s.UserName}>
          <MyAvatar alt={name} src={noAvatar}>
            {initials}
          </MyAvatar>
          <span className={s.Name}>{name}</span>
        </div>
      )}

      <ButtonIcon
        onClick={onClick}
        aria-label="Open modal"
        btnClass="btnLogout"
      >
        {sizeScreen <= 767 ? (
          <div className={s.boxLogout}>
            <Logout className={s.svgLogout} />
          </div>
        ) : (
          <div className={s.boxLogout}>
            <Logout className={s.svgLogout} />
            <span className={s.textNav}>{logOut}</span>
          </div>
        )}
      </ButtonIcon>
    </div>
  );
};

UserMenu.propTypes = {
  onClick: PropTypes.func,
};

export default withLocalization(UserMenu);
