import RegistrationForm from '../../components/AuthForms/RegistrationForm';
import withLocalization from '../../components/hoc/withLocalization';
import AuthHeading from '../../components/AuthHeading';
import BgPageContainer from '../../components/AuthForms/BgPageContainer';
import Title from '../../components/Title';
import AuthNav from '../../components/AuthForms/AuthNav';
import ImgContentContainer from '../../components/AuthForms/ImgContentContainer';
import AuthContentContainer from '../../components/AuthForms/AuthContentContainer';
import { ReactComponent as SignupImgPage } from '../../assets/images/phone-book.svg';
import routes from '../../assets/routes';
import s from './RegistrationPage.module.scss';

const RegistrationPage = ({ localization }) => {
  const { signUpPage, logIn, primaryTitle } = localization.localizedContent;

  return (
    <BgPageContainer>
      <ImgContentContainer>
        <SignupImgPage width={400} height={400} className={s.svgSignup} />
        <Title secondaryTitle={primaryTitle} titleClass="autImgHeading" />
      </ImgContentContainer>

      <AuthContentContainer authContainer="SignupFormContainer">
        <AuthHeading>
          <Title primaryTitle={signUpPage} titleClass="authHeading" />
        </AuthHeading>
        <RegistrationForm />
        <AuthNav content={logIn} path={routes.login} />
      </AuthContentContainer>
    </BgPageContainer>
  );
};

export default withLocalization(RegistrationPage);
