import ScrollToTop from 'react-scroll-to-top';
import s from './ScrollToUp.module.scss';

const ScrollToUp = () => {
  return (
    <div>
      <div style={{ marginTop: '2px' }} />
      <ScrollToTop
        style={{ backgroundColor: '#52b2fc' }}
        className={s.ScrollToUp}
        color="#ffffff"
        smooth
      />
    </div>
  );
};

export default ScrollToUp;
