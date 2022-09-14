import PropTypes from 'prop-types';
import s from './AuthContentContainer.module.scss';

const AuthContentContainer = ({ children, authContainer }) => {
  return <div className={s[`${authContainer}`]}>{children}</div>;
};

AuthContentContainer.propTypes = {
  children: PropTypes.node,
};

export default AuthContentContainer;
