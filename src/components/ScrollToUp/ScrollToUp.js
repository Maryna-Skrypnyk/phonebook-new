import ScrollToTop from 'react-scroll-to-top';
import s from './ScrollToUp.module.scss';

const ScrollToUp = () => {
  return (
    <div>
      <div />
      <ScrollToTop className={s.scrollToUp} color="#ffffff" smooth />
    </div>
  );
};

export default ScrollToUp;
