// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { authOperations, authSelectors } from '../../../redux_thunk/auth';
import withLocalization from '../../hoc/withLocalization';
import TextFieldForm from '../TextFieldForm';
import Spinner from '../../Spinner';
// import routes from '../../../assets/routes';
import ButtonIconWithContent from '../../ButtonIconWithContent';
import { ReactComponent as IconEmail } from '../../../assets/images/icons/email.svg';
import { ReactComponent as IconLock } from '../../../assets/images/icons/lock.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import s from './LoginForm.module.scss';

const LoginForm = ({ localization }) => {
  // const navigate = useNavigate();
  const {
    logIn,
    required,
    notValid,
    emailPlaceholder,
    passwordPlaceholder,
    minCharacterNumber,
    maxCharacterNumber,
  } = localization.localizedContent;
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  // const goToPhonebookPage = () => navigate(routes.contacts, { replace: true });

  const validationsSchema = Yup.object().shape({
    email: Yup.string(emailPlaceholder).email(notValid).required(required),
    password: Yup.string(passwordPlaceholder)
      .min(8, minCharacterNumber)
      .max(18, maxCharacterNumber)
      .required(required),
  });

  const handleSubmit = async ({ email, password }) => {
    if (!email || !password) return;
    const resultAction = await dispatch(
      authOperations.login({ email, password }),
    );
    if (authOperations.login.fulfilled.match(resultAction)) {
      const dataUser = resultAction.payload.user;
      // goToPhonebookPage();
      toast.success(`${dataUser.name}, you are successfully logged in!`);
    } else {
      if (resultAction.payload) {
        toast.error(resultAction.payload);
      } else {
        toast.error(`Error! Login failed.`);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={validationsSchema}
    >
      {({ handleChange, handleBlur, values, isValid, dirty }) => (
        <Form className={s.Form}>
          <TextFieldForm
            label={
              <IconEmail
                fill="#52b2fc"
                style={{ opacity: 0.7 }}
                width={24}
                height={24}
              />
            }
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            type="email"
            placeholder={emailPlaceholder}
            className={s.Field}
            id="email"
          />

          <TextFieldForm
            label={
              <IconLock
                fill="#52b2fc"
                style={{ opacity: 0.7 }}
                width={24}
                height={24}
              />
            }
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder={passwordPlaceholder}
            className={s.Field}
            id="password"
          />

          <ButtonIconWithContent
            type="submit"
            btnClass="btnSignUp"
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            aria-label="Submit login-form"
          >
            {logIn}
          </ButtonIconWithContent>

          {isLoading && <Spinner />}
        </Form>
      )}
    </Formik>
  );
};

export default withLocalization(LoginForm);
