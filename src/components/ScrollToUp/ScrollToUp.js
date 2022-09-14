import ScrollToTop from 'react-scroll-to-top';
import s from './ScrollToUp.module.scss';

const ScrollToUp = () => {
  return (
    <div>
      <div />
      <ScrollToTop
        // style={{ backgroundColor: '#52b2fc' }}
        className={s.scrollToUp}
        color="#ffffff"
        smooth
      />
    </div>
  );
};

export default ScrollToUp;
