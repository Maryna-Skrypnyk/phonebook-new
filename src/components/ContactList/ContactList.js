import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import {
  contactsOperations,
  contactsSelectors,
} from '../../redux_thunk/contacts';
import Spinner from '../Spinner';
import ContactItem from './ContactItem';
import withLocalization from '../hoc/withLocalization';
import { ReactComponent as ImgPhone } from '../../assets/images/phone-book.svg';

import s from './ContactList.module.scss';

const ContactList = ({ localization }) => {
  const {
    noContacts,
    noFilterContacts,
    successDeleteContact,
    errorDeleteContact,
  } = localization.localizedContent;
  const dispatch = useDispatch();

  const allContacts = useSelector(contactsSelectors.getContacts);
  const filterContacts = useSelector(
    contactsSelectors.getVisibleContactsSortByName,
  );
  const isLoading = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  // const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  const onDeleteContact = async id => {
    const resultAction = await dispatch(contactsOperations.deleteContact(id));
    if (contactsOperations.deleteContact.fulfilled.match(resultAction)) {
      const dataContact = resultAction.payload;
      toast.success(
        `${successDeleteContact} "${dataContact.name}: ${dataContact.number}"!`,
      );
    } else {
      if (resultAction.payload) {
        toast.error(resultAction.payload);
      } else {
        toast.error(`${errorDeleteContact}`);
      }
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      {filterContacts.length === 0 && allContacts.length !== 0 && (
        <motion.div
          className={s.notice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p>{noFilterContacts}</p>
          <ImgPhone
            alt="phonebookIcon"
            style={{
              marginTop: '10px',
            }}
            width="150"
          />
        </motion.div>
      )}
      {allContacts.length === 0 && (
        <motion.div
          className={s.notice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p>{noContacts}</p>
          <ImgPhone
            alt="phonebookIcon"
            style={{
              marginTop: '10px',
            }}
            width="150"
          />
        </motion.div>
      )}

      <ul className={s.contactList}>
        <AnimatePresence>
          {filterContacts.map(({ name, number, id }) => (
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
