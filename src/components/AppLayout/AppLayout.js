import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Container from '../Container';
import Footer from '../Footer';
import LocaleSelector from '../LocaleSelector';
import s from './AppLayout.module.scss';

const AppLayout = () => {
  return (
    <div>
      <header>
        <Container>
          <div className={s.headerMenu}>
            <Navigation />
            <LocaleSelector />
          </div>
        </Container>
      </header>
      <Container>
        <Outlet />
      </Container>
      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
};

export default AppLayout;
