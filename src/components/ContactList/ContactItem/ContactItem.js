import PropTypes from 'prop-types';
import ButtonIcon from '../../ButtonIcon';
import { motion } from 'framer-motion';
import { ReactComponent as DeleteIcon } from '../../../assets/images/icons/delete2.svg';
import s from './ContactItem.module.scss';

const ContactItem = ({ onDeleteContact, name, number }) => {
  return (
    <motion.li
      className={s.contactItem}
      initial={{
        x: -50,
        opacity: 0,
      }}
      animate={{
        x: 0,
      }}
      exit={{ x: 50, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
    >
      <p className={s.contact}>
        <span className={s.contactName}>{name}:</span> {number}
      </p>
      <ButtonIcon
        onClick={onDeleteContact}
        aria-label="Delete contact"
        btnClass="btnDeleteContact"
      >
        <DeleteIcon width="30" height="30" className={s.iconDelete} />
        {/* <Delete svg={s.svgDelete} fill={s.fillDelete} /> */}
      </ButtonIcon>
    </motion.li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
