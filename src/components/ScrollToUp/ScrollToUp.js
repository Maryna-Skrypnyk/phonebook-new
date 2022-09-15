import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as ArrowUp } from '../../assets/images/icons/upArrow.svg';
import s from './ScrollToUp.module.scss';

const ScrollToUp = () => {
  return (
    <>
      <div />
      <ScrollToTop
        className={s.ScrollToUp}
        component={<ArrowUp className={s.iconArrow} />}
        smooth
      />
    </>
  );
};

export default ScrollToUp;
