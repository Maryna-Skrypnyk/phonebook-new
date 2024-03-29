import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsOperations,
  contactsSelectors,
  changeFilter,
} from '../../redux_thunk/contacts';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import withLocalization from '../hoc/withLocalization';
import ButtonIconWithContent from '../ButtonIconWithContent/ButtonIconWithContent';
import * as Yup from 'yup';
import { makeToastWarn } from '../Notification/notification';
import s from './FormsContact.module.scss';
import { toast } from 'react-toastify';

const FormContactAdd = ({ saveContact, localization }) => {
  const {
    isContact,
    contentBtnAdd,
    namePlaceholder,
    phoneNumber,
    required,
    minCharacterName,
    maxCharacterName,
    notSpaces,
    notValid,
    minCharacterNumber,
    maxCharacterNumber,
    successAddContact,
    errorAddContact,
  } = localization.localizedContent;

  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onHandleSubmit = async ({ name, number }) => {
    if (
      contacts.find(contact => contact.name === name) &&
      contacts.find(contact => contact.number === number)
    ) {
      makeToastWarn(
        `${namePlaceholder} "${name}" / ${phoneNumber} "${number}" ${isContact}`,
        'warn',
      );
      return;
    }

    if (contacts.find(contact => contact.name === name)) {
      makeToastWarn(`${namePlaceholder} "${name}" ${isContact}`, 'warn');
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      makeToastWarn(`${phoneNumber} "${number}" ${isContact}`, 'warn');
      return;
    }

    const resultAction = await dispatch(
      contactsOperations.addContact({ name, number }),
    );
    if (contactsOperations.addContact.fulfilled.match(resultAction)) {
      if (filter.length > 0) {
        dispatch(changeFilter(''));
      }
      toast.success(`${successAddContact} "${name}: ${number}".`);
    } else {
      if (resultAction.payload) {
        toast.error(resultAction.payload);
      } else {
        toast.error(`${errorAddContact}`);
      }
    }
    saveContact();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim(notSpaces)
      .min(2, minCharacterName)
      .max(20, maxCharacterName)
      .required(required),
    number: Yup.string()
      .trim(notSpaces)
      .matches(/^[+]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/, notValid)
      .min(8, minCharacterNumber)
      .max(18, maxCharacterNumber)
      .required(required),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={onHandleSubmit}
      validateOnBlur={false}
    >
      <Form className={s.form}>
        <label htmlFor="name" className={s.label}>
          {namePlaceholder}
        </label>
        <Field
          id="name"
          name="name"
          type="text"
          className={s.input}
          placeholder={namePlaceholder}
          autoFocus
        />
        <ErrorMessage component="span" name="name" className={s.errorName} />
        <label htmlFor="number" className={s.label}>
          {phoneNumber}
        </label>
        <Field
          id="number"
          name="number"
          type="tel"
          className={s.input}
          placeholder={phoneNumber}
        />
        <ErrorMessage
          component="span"
          name="number"
          className={s.errorNumber}
        />

        <ButtonIconWithContent
          type="submit"
          btnClass="button"
          aria-label="Add contact"
        >
          {contentBtnAdd}
        </ButtonIconWithContent>
      </Form>
    </Formik>
  );
};

FormContactAdd.propTypes = {
  saveContact: PropTypes.func.isRequired,
};

export default withLocalization(FormContactAdd);
