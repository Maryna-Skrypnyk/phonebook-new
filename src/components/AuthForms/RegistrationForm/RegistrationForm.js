import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { authOperations, authSelectors } from '../../../redux_thunk/auth';
import withLocalization from '../../hoc/withLocalization';
import PasswordStrenghtMeter from './PasswordStrenghtMeter';
import TextFieldForm from '../TextFieldForm';
import Spinner from '../../Spinner';
// import routes from '../../../assets/routes';
import ButtonIconWithContent from '../../ButtonIconWithContent';
import { ReactComponent as IconEmail } from '../../../assets/images/icons/email.svg';
import { ReactComponent as IconLock } from '../../../assets/images/icons/lock.svg';
import { ReactComponent as IconName } from '../../../assets/images/icons/user.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import s from './RegistrationForm.module.scss';

const RegistrationForm = ({ localization }) => {
  // const navigate = useNavigate();
  const {
    signUp,
    required,
    notSpaces,
    notValid,
    namePlaceholder,
    emailPlaceholder,
    passwordPlaceholder,
    minCharacterName,
    maxCharacterName,
    minCharacterNumber,
    maxCharacterNumber,
    confirmPasswordPlaceholder,
    notConfirmPassword,
  } = localization.localizedContent;
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const isLoading = useSelector(authSelectors.getLoading);

  const validationsSchema = Yup.object().shape({
    name: Yup.string(namePlaceholder)
      .typeError()
      .trim(notSpaces)
      .min(2, minCharacterName)
      .max(20, maxCharacterName)
      .required(required),
    email: Yup.string(emailPlaceholder).email(notValid).required(required),
    password: Yup.string(passwordPlaceholder)
      .min(8, minCharacterNumber)
      .max(18, maxCharacterNumber)
      .required(required),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], notConfirmPassword)
      .required(required),
  });

  // const goToLoginPage = () => navigate(routes.login, { replace: true });
  // const goToPhonebookPage = () => navigate(routes.contacts, { replace: true });

  const handleSubmit = async ({ name, email, password }) => {
    if (!name || !email || !password) return;
    const resultAction = await dispatch(
      authOperations.register({
        name,
        email,
        password,
      }),
    );

    if (authOperations.register.fulfilled.match(resultAction)) {
      const dataUser = resultAction.payload.user;
      // goToPhonebookPage();
      toast.success(
        `Congratulations, "${dataUser.name}"! You are successfully registered!`,
      );
    } else {
      if (resultAction.payload) {
        toast.error(resultAction.payload);
      } else {
        toast.error('Error! Signup failed.');
      }
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={validationsSchema}
    >
      {({ handleChange, handleBlur, values, isValid, dirty }) => (
        <Form className={s.Form}>
          <TextFieldForm
            label={
              <IconName
                fill="#52b2fc"
                style={{ opacity: 0.7 }}
                width={24}
                height={24}
              />
            }
            name="name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder={namePlaceholder}
            className={s.Field}
            id="name"
          />

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
            onInput={e => setPassword(e.target.value)}
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
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            placeholder={confirmPasswordPlaceholder}
            className={s.Field}
          />

          <PasswordStrenghtMeter password={password} />

          <ButtonIconWithContent
            type="submit"
            btnClass="btnSignUp"
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            aria-label="Submit signup-form"
          >
            {signUp}
          </ButtonIconWithContent>

          {isLoading && <Spinner />}
        </Form>
      )}
    </Formik>
  );
};

export default withLocalization(RegistrationForm);
