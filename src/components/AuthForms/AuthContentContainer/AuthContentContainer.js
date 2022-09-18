import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import s from './AuthContentContainer.module.scss';

const AuthContentContainer = ({ children, authContainer }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={s[`${authContainer}`]}
        initial={{ scale: 0.5 }}
        exit={{ scale: 0.5 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

AuthContentContainer.propTypes = {
  children: PropTypes.node,
};

export default AuthContentContainer;
