import PropTypes from 'prop-types';
import s from './PageWrapper.module.scss';

const PageWrapper = ({ children }) => (
  <div className={s.PageWrapper}>{children}</div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
