import PropTypes from 'prop-types';
import useSizeScreen from '../../hooks/useSizeScreen';
import { ReactComponent as Logo } from '../../assets/images/phone-book.svg';
import s from './AuthHeading.module.scss';

const AuthHeading = ({ children }) => {
  const sizeScreen = useSizeScreen();

  return (
    <div className={s.head}>
      {sizeScreen <= 767 ? (
        <Logo style={{ marginRight: '10px' }} width="30" height="30" />
      ) : (
        <Logo style={{ marginRight: '10px' }} width="40" height="40" />
      )}
      {children}
    </div>
  );
};

AuthHeading.defaultProps = {
  children: null,
};

AuthHeading.propTypes = {
  children: PropTypes.node,
};

export default AuthHeading;
