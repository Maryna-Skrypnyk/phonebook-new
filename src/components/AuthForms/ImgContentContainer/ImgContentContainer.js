import PropTypes from 'prop-types';
import s from './ImgContentContainer.module.scss';

const ImgContentContainer = ({ children }) => {
  return (
    <div className={s.ImgContent}>
      {children}
      {/* <PageHeading text="Finance App" /> */}
    </div>
  );
};

ImgContentContainer.propTypes = {
  children: PropTypes.node,
};

export default ImgContentContainer;
