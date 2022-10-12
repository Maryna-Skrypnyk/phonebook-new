import { createAction } from '@reduxjs/toolkit';

// //////////// для асинхронних запитів
export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
); // pending
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
); // fulfilled
export const fetchContactsError = createAction('contacts/fetchContactsError'); // rejected
export const addContactRequest = createAction('contacts/addContactsRequest');
export const addContactSuccess = createAction('contacts/addContactsSuccess');
export const addContactError = createAction('contacts/addContactsError');
export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');
export const updateContactRequest = createAction(
  'contacts/updateContactRequest',
);
export const updateContactSuccess = createAction(
  'contacts/updateContactSuccess',
);
export const updateContactError = createAction('contacts/updateContactError');

export const changeFilter = createAction('contacts/changeFilter');
