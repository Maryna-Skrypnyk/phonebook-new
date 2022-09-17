import PropTypes from 'prop-types';
import withLocalization from '../../hoc/withLocalization';
import Spinner from '../../Spinner';
// import { useDispatch, useSelector } from 'react-redux';
// import authOperations from '../../../redux/auth/auth-operations';
// import authSelectors from '../../../redux/auth/auth-selectors';
import ButtonIconWithContent from '../../ButtonIconWithContent';
import s from './LogoutForm.module.scss';

const LogoutForm = ({ onClose, localization }) => {
  const { confirmLogOut, actYes, actNo } = localization.localizedContent;
  // const dispatch = useDispatch();
  // const isLoading = useSelector(authSelectors.getLoading);

  const isLoading = false; // тимчасово

  const handleClickCancel = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleClickLogout = () => {
    // dispatch(authOperations.logOut());
    onClose();
  };

  return (
    <div className={s.Form}>
      <p className={s.Text}>{confirmLogOut}</p>
      <div className={s.buttonsLogout}>
        <ButtonIconWithContent
          onClick={handleClickLogout}
          btnClass="btnLogoutContact"
          aria-label="Log out and close modal"
        >
          {actYes}
        </ButtonIconWithContent>

        <ButtonIconWithContent
          onClick={handleClickCancel}
          btnClass="btnLogoutContact"
          aria-label="Cancel exit and close modal"
        >
          {actNo}
        </ButtonIconWithContent>
      </div>

      {isLoading && <Spinner />}
    </div>
  );
};

LogoutForm.propTypes = {
  onClose: PropTypes.func,
};
export default withLocalization(LogoutForm);
