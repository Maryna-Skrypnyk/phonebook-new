import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContactsSortByName } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import ContactItem from './ContactItem';
import withLocalization from '../hoc/withLocalization';
import { motion, AnimatePresence } from 'framer-motion';
import s from './ContactList.module.scss';

const ContactList = ({ localization }) => {
  const { noContacts } = localization.localizedContent;

  const contacts = useSelector(getVisibleContactsSortByName);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      {contacts.length === 0 && (
        <motion.p
          className={s.notice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {noContacts}
        </motion.p>
      )}
      <ul className={s.contactList}>
        <AnimatePresence>
          {contacts.map(({ name, number, id }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              // onDeleteContact={() => dispatch(deleteContact(id))}
              onDeleteContact={() => onDeleteContact(id)}
            />
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
};

export default withLocalization(ContactList);
