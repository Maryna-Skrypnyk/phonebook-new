import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import s from './ImgContentContainer.module.scss';

const ImgContentContainer = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={s.ImgContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
      >
        {children}
        {/* <PageHeading text="Finance App" /> */}
      </motion.div>
    </AnimatePresence>
  );
};

ImgContentContainer.propTypes = {
  children: PropTypes.node,
};

export default ImgContentContainer;
