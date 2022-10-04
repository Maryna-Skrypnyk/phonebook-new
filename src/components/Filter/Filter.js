import withLocalization from '../hoc/withLocalization';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getContactsFilter } from '../../redux/contacts/contacts-selectors';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.scss';

const Filter = ({ localization }) => {
  const filterInputId = uuidv4();
  const { titleFilter, filterPlaceholder } = localization.localizedContent;
  const value = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  return (
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
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
        placeholder={filterPlaceholder}
        className={s.input}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  );
};

export default withLocalization(Filter);
