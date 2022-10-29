import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import s from './ButtonIconWithContent.module.scss';

const ButtonIconWithContent = ({
  type,
  onClick,
  children,
  btnClass,
  ...allyProps
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={s[`${btnClass}`]}
      {...allyProps}
      initial={{ scale: 0.5 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.button>
  );
};

ButtonIconWithContent.defaultProps = {
  onClick: () => null,
  children: null,
  type: 'button',
  btnClass: '',
};

ButtonIconWithContent.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  btnClass: PropTypes.string,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default ButtonIconWithContent;
