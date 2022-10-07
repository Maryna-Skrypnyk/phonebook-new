import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Modal';
import FormContactEdit from '../../FormsContact/FormContactEdit';
import ButtonIcon from '../../ButtonIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as DeleteIcon } from '../../../assets/images/icons/delete2.svg';
import { ReactComponent as EditIcon } from '../../../assets/images/icons/edit.svg';
import { ReactComponent as CloseIcon } from '../../../assets/images/icons/close.svg';
import s from './ContactItem.module.scss';

const ContactItem = ({ onDeleteContact, id, name, number }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
      <div className={s.buttons}>
        <ButtonIcon
          onClick={toggleModal}
          aria-label="Update contact"
          btnClass="btnDeleteContact"
        >
          <EditIcon width="30" height="30" className={s.iconEdit} />
        </ButtonIcon>
        <ButtonIcon
          onClick={onDeleteContact}
          aria-label="Delete contact"
          btnClass="btnDeleteContact"
        >
          <DeleteIcon width="30" height="30" className={s.iconDelete} />
        </ButtonIcon>
      </div>
      <AnimatePresence>
        {showModal && (
          <Modal onClose={toggleModal}>
            <FormContactEdit id={id} saveContact={toggleModal} />
            <ButtonIcon
              onClick={toggleModal}
              btnClass="btnCloseModal"
              aria-label="Close modal add contacts"
            >
              <CloseIcon width="32" height="32" fill="currentColor" />
            </ButtonIcon>
          </Modal>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
