import LoginForm from '../../components/AuthForms/LoginForm';
import withLocalization from '../../components/hoc/withLocalization';
import AuthHeading from '../../components/AuthHeading';
import BgPageContainer from '../../components/AuthForms/BgPageContainer';
import Title from '../../components/Title';
import AuthNav from '../../components/AuthForms/AuthNav';
import ImgContentContainer from '../../components/AuthForms/ImgContentContainer';
import AuthContentContainer from '../../components/AuthForms/AuthContentContainer';
import { ReactComponent as SignupImgPage } from '../../assets/images/phone-book.svg';
import routes from '../../assets/routes';
import s from './LoginPage.module.scss';

const RegistrationPage = ({ localization }) => {
  const { logInPage, signUp, primaryTitle } = localization.localizedContent;

  return (
    <BgPageContainer>
      <ImgContentContainer>
        <SignupImgPage width={400} height={400} className={s.svgLoginImg} />
        <Title secondaryTitle={primaryTitle} titleClass="autImgHeading" />
      </ImgContentContainer>

      <AuthContentContainer authContainer="LoginFormContainer">
        <AuthHeading>
          <Title primaryTitle={logInPage} titleClass="authHeading" />
        </AuthHeading>
        <LoginForm />
        <AuthNav content={signUp} path={routes.signup} />
      </AuthContentContainer>
    </BgPageContainer>
  );
};

export default withLocalization(RegistrationPage);
