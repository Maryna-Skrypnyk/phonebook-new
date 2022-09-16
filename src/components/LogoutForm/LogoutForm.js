import PropTypes from 'prop-types';
import withLocalization from '../hoc/withLocalization';
// import { useDispatch, useSelector } from 'react-redux';
// import authOperations from '../../../redux/auth/auth-operations';
// import authSelectors from '../../../redux/auth/auth-selectors';
import ButtonIconWithContent from '../ButtonIconWithContent';
// import Spinner from '../../Spinner';

import s from './LogoutForm.module.scss';

const LogoutForm = ({ onClose, localization }) => {
  const { confirmLogOut, actYes, actNo } = localization.localizedContent;
  // const dispatch = useDispatch();
  // const isLoading = useSelector(authSelectors.getLoading);

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
      <ButtonIconWithContent
        onClick={handleClickLogout}
        btnClass="btnAddContact"
        aria-label="Log out and close modal"
      >
        {actYes}
      </ButtonIconWithContent>

      <ButtonIconWithContent
        onClick={handleClickCancel}
        btnClass="btnAddContact"
        aria-label="Cancel exit and close modal"
      >
        {actNo}
      </ButtonIconWithContent>

      {/* {isLoading && <Spinner />} */}
    </div>
  );
};

LogoutForm.propTypes = {
  onClose: PropTypes.func,
};
export default withLocalization(LogoutForm);
