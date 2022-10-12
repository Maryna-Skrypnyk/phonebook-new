// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   updateContact,
//   changeFilter,
// } from './contacts-operations';

// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
//   [updateContact.fulfilled]: (state, { payload }) =>
//     state.map(contact => (contact.id === payload.id ? payload : contact)),
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
//   [updateContact.pending]: () => true,
//   [updateContact.fulfilled]: () => false,
//   [updateContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
//   [addContact.rejected]: (_, { payload }) => payload,
//   [addContact.pending]: () => null,
//   [deleteContact.rejected]: (_, { payload }) => payload,
//   [deleteContact.pending]: () => null,
//   [updateContact.rejected]: (_, { payload }) => payload,
//   [updateContact.pending]: () => null,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   isLoading,
//   error,
//   filter,
// });

//////////////
import { createSlice } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {},
  extraReducers: {
    [addContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      //   return {
      //     ...state,
      //     items: [...state.items, payload],
      //     isLoading: true,
      //     error: null,
      //   };
      state.items = [...state.items, payload];
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...payload];
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [updateContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      state.items.map(contact =>
        contact.id === payload.id ? payload : contact,
      );
      state.isLoading = false;
      state.error = null;
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [changeFilter]: (_, { payload }) => payload,
  },
});

export const contactsReducerWithSlice = contactsSlice.reducer;
