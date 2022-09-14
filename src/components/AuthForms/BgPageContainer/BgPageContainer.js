import PropTypes from 'prop-types';
import s from './BgPageContainer.module.scss';

const BgPageContainer = ({ children }) => {
  return (
    <section className={s.AuthPage}>
      <div className={s.containerAuthPage}>{children}</div>
    </section>
  );
};

BgPageContainer.propTypes = {
  children: PropTypes.node,
};

export default BgPageContainer;
