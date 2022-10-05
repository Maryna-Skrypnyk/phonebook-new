import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import Container from '../Container';
import UserMenu from '../UserMenu';
import Modal from '../Modal';
import LogoutForm from '../AuthForms/LogoutForm';
import ButtonIcon from '../ButtonIcon';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close.svg';
import Footer from '../Footer';
import LocaleSelector from '../LocaleSelector';
import s from './AppLayout.module.scss';

const AppLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = false; // тимчасово

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <header>
        <Container>
          <div className={s.headerMenu}>
            <Navigation />
            <LocaleSelector />
            {isLoggedIn ? <UserMenu onClick={toggleModal} /> : <AuthNav />}

            {showModal && (
              <Modal onClose={toggleModal}>
                <LogoutForm onClose={toggleModal} />
                <ButtonIcon
                  onClick={toggleModal}
                  btnClass="btnCloseModal"
                  aria-label="Close modal logout"
                >
                  <CloseIcon width="32" height="32" fill="currentColor" />
                </ButtonIcon>
              </Modal>
            )}
          </div>
        </Container>
      </header>
      <main className={s.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer className={s.footer}>
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
};

export default AppLayout;
