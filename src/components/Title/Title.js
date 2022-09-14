import PropTypes from 'prop-types';
import s from './Title.module.scss';

const Title = ({ primaryTitle, secondaryTitle, titleClass, children }) => {
  return (
    <>
      {primaryTitle && (
        <h1 className={s[`${titleClass}`]}>
          {children}
          {primaryTitle}
        </h1>
      )}
      {secondaryTitle && (
        <h2 className={s[`${titleClass}`]}>
          {children}
          {secondaryTitle}
        </h2>
      )}
    </>
  );
};

Title.defaultProps = {
  primaryTitle: '',
  secondaryTitle: '',
  titleClass: '',
  children: null,
};

Title.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  titleClass: PropTypes.string,
  children: PropTypes.node,
};

export default Title;
