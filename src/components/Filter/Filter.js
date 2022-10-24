import withLocalization from '../hoc/withLocalization';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux_thunk/contacts';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.scss';

const Filter = ({ localization }) => {
  const filterInputId = uuidv4();
  const { titleFilter, filterPlaceholder } = localization.localizedContent;
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <motion.div
          className={s.filter}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <label htmlFor={filterInputId} className={s.label}>
            {titleFilter}
          </label>
          <motion.input
            id={filterInputId}
            type="text"
            name="name"
            value={filter}
            onChange={event => dispatch(changeFilter(event.target.value))}
            placeholder={filterPlaceholder}
            className={s.input}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </>
  );
};

export default withLocalization(Filter);
