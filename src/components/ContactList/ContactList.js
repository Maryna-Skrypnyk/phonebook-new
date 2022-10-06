import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Spinner from '../Spinner';
import ContactItem from './ContactItem';
import withLocalization from '../hoc/withLocalization';
import { motion, AnimatePresence } from 'framer-motion';
import s from './ContactList.module.scss';

const ContactList = ({ localization }) => {
  const { noContacts, noFilterContacts } = localization.localizedContent;
  // const contacts = useSelector(contactsSelectors.getVisibleContactsSortByName);

  const allContacts = useSelector(contactsSelectors.getContacts);
  const filterContacts = useSelector(
    contactsSelectors.getVisibleContactsSortByName,
  );
  const isLoading = useSelector(contactsSelectors.getLoading);

  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {isLoading && <Spinner />}
      {filterContacts.length === 0 && allContacts.length !== 0 && (
        <motion.p
          className={s.notice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {noFilterContacts}
        </motion.p>
      )}
      {allContacts.length === 0 && (
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
          {filterContacts?.map(({ name, number, id }) => (
            <ContactItem
              key={id}
              id={id}
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
