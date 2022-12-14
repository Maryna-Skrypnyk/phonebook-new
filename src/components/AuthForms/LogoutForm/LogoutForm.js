import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import withLocalization from '../../hoc/withLocalization';
import Spinner from '../../Spinner';
import { authOperations, authSelectors } from '../../../redux_thunk/auth';
import ButtonIconWithContent from '../../ButtonIconWithContent';
import s from './LogoutForm.module.scss';

const LogoutForm = ({ onClose, localization }) => {
  const { confirmLogOut, actYes, actNo } = localization.localizedContent;
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  const handleClickCancel = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleClickLogout = async () => {
    const resultAction = await dispatch(authOperations.logout());
    if (authOperations.logout.fulfilled.match(resultAction)) {
      onClose();
      toast.success(`You are successfully logged out!`);
      // return resultAction;
    } else {
      if (resultAction.payload) {
        toast.error(resultAction.payload);
      } else {
        toast.error('Error! Logout failed.');
      }
    }
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
