import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/auth-operations';
import { changeFilter } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  extraReducers: {
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
      // state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      // state.items = [...state.items, ...action.payload];
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // const index = state.items.findIndex(
      //   contact => contact.id === action.payload,
      // );
      // state.items.splice(index, 1);
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
    [deleteContact.rejected]: handleRejected,

    [updateContact.pending]: handlePending,
    [updateContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map(contact =>
        contact.id === action.payload.id ? action.payload : contact,
      );
    },
    [updateContact.rejected]: handleRejected,

    [logout.fulfilled]: state => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
      state.filter = '';
    },

    [changeFilter]: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// const contactsReducer = contactsSlice.reducer;

// export default contactsReducer;

export default contactsSlice.reducer;
