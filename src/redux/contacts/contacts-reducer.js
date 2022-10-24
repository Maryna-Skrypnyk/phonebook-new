import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
  changeFilter,
} from './contacts-actions';
import { logoutSuccess } from '../auth/auth-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updateContactSuccess]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
  [logoutSuccess]: () => [],
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [updateContactRequest]: () => true,
  [updateContactSuccess]: () => false,
  [updateContactError]: () => false,
  [logoutSuccess]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
  [addContactError]: (_, { payload }) => payload,
  [addContactRequest]: () => null,
  [deleteContactError]: (_, { payload }) => payload,
  [deleteContactRequest]: () => null,
  [updateContactError]: (_, { payload }) => payload,
  [updateContactRequest]: () => null,
  [logoutSuccess]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
  [logoutSuccess]: () => '',
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});
