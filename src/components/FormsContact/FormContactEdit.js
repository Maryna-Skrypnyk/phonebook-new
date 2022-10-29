import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  contactsOperations,
  contactsSelectors,
} from '../../redux_thunk/contacts';

import withLocalization from '../hoc/withLocalization';
import ButtonIconWithContent from '../ButtonIconWithContent/ButtonIconWithContent';
import { makeToastWarn } from '../Notification/notification';
import s from './FormsContact.module.scss';
import { toast } from 'react-toastify';

const FormContactEdit = ({ saveContact, localization, id }) => {
  const {
    isContact,
    contentBtnEdit,
    namePlaceholder,
    phoneNumber,
    required,
    minCharacterName,
    maxCharacterName,
    notSpaces,
    notValid,
    minCharacterNumber,
    maxCharacterNumber,
  } = localization.localizedContent;

  const contacts = useSelector(contactsSelectors.getContacts);
  const currentContact = contacts.find(contact => contact.id === id);
  const dispatch = useDispatch();

  const onHandleSubmit = async ({ name, number }) => {
    const notCurrentContacts = contacts.filter(contact => contact.id !== id);
    if (
      notCurrentContacts.find(contact => contact.name === name) &&
      notCurrentContacts.find(contact => contact.number === number)
    ) {
      makeToastWarn(
        `${namePlaceholder} "${name}" ${phoneNumber} / "${number}" ${isContact}`,
        'warn',
      );
      return;
    }
    if (notCurrentContacts.find(contact => contact.name === name)) {
      makeToastWarn(`${namePlaceholder} "${name}" ${isContact}`, 'warn');
      return;
    }
    if (notCurrentContacts.find(contact => contact.number === number)) {
      makeToastWarn(`${phoneNumber} "${number}" ${isContact}`, 'warn');
      return;
    }

    const resultAction = await dispatch(
      contactsOperations.updateContact([id, { name, number }]),
    );
    if (contactsOperations.updateContact.fulfilled.match(resultAction)) {
      toast.success(
        `You have successfully updated contact "${currentContact.name}: ${currentContact.number}" to "${name}: ${number}"`,
      );
    } else {
      if (resultAction.payload) {
        toast.error(resultAction.payload);
      } else {
        toast.error(`Error! Update contact failed.`);
      }
    }
    saveContact();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim(notSpaces)
      .min(2, minCharacterName)
      .max(12, maxCharacterName)
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
      initialValues={{
        name: currentContact.name,
        number: currentContact.number,
      }}
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
          {contentBtnEdit}
        </ButtonIconWithContent>
      </Form>
    </Formik>
  );
};

FormContactEdit.propTypes = {
  saveContact: PropTypes.func.isRequired,
};

export default withLocalization(FormContactEdit);
