import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import withLocalization from '../../components/hoc/withLocalization';
import { authSelectors } from '../../redux_thunk/auth';
import PageWrapper from '../../components/PageWrapper';
import Title from '../../components/Title';
import { ReactComponent as ImgHome } from '../../assets/images/phone-book.svg';
import { motion, AnimatePresence } from 'framer-motion';
import s from './HomePage.module.scss';

const HomePage = ({ localization }) => {
  const {
    greeting,
    appTarget,
    signUp,
    logIn,
    appAction,
    actionPress,
    primaryTitle,
    // logOut,
    // outAppAction,
  } = localization.localizedContent;

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <PageWrapper>
      <Title primaryTitle={greeting} titleClass="titleGreeting">
        {' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>

      <p className={s.iconPhonebook}>
        {appTarget}{' '}
        {/* <span role="img" aria-label="Phonebook icon">
          📒
        </span> */}
      </p>

      {/* {isLoggedIn && (
        <p className={s.iconPhonebookAct}>
          {actionPress}{' '}
          <span className={s.act}>
            <Link to={'logout'} className={s.replaceAuthLink}>
              {logOut}
            </Link>
          </span>
          {outAppAction}.
        </p>
      )} */}

      {!isLoggedIn && (
        <p className={s.iconPhonebookAct}>
          {actionPress}{' '}
          <span className={s.act}>
            <Link to={'signup'} className={s.replaceAuthLink}>
              {signUp}
            </Link>
          </span>{' '}
          /{' '}
          <span className={s.act}>
            <Link to={'login'} className={s.replaceAuthLink}>
              {logIn}
            </Link>
          </span>{' '}
          {appAction}.
        </p>
      )}

      <AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <ImgHome alt="phonebookIcon" className={s.imgHome} />
          <Title secondaryTitle={primaryTitle} titleClass="homeImgHeading" />
        </motion.div>
      </AnimatePresence>
    </PageWrapper>
  );
};

export default withLocalization(HomePage);
