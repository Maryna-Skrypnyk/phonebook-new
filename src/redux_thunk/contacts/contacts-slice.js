import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '../../redux/auth';
import { changeFilter } from './contacts-actions';
import contactsOperations from './contacts-operations';

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
    [contactsOperations.addContact.pending]: handlePending,
    [contactsOperations.addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
      // state.items.push(action.payload);
    },
    [contactsOperations.addContact.rejected]: handleRejected,

    [contactsOperations.fetchContacts.pending]: handlePending,
    [contactsOperations.fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...action.payload];
      // state.items = action.payload;
    },
    [contactsOperations.fetchContacts.rejected]: handleRejected,

    [contactsOperations.deleteContact.pending]: handlePending,
    [contactsOperations.deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      // const index = state.items.findIndex(
      //   contact => contact.id === action.payload,
      // );
      // state.items.splice(index, 1);
      state.items.filter(({ id }) => id !== action.payload);
    },
    [contactsOperations.deleteContact.rejected]: handleRejected,

    [contactsOperations.updateContact.pending]: handlePending,
    [contactsOperations.updateContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.map(contact =>
        contact.id === action.payload.id ? action.payload : contact,
      );
    },
    [contactsOperations.updateContact.rejected]: handleRejected,

    [authOperations.logout.fulfilled]: state => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
      state.filter = '';
    },

    [changeFilter]: (_, action) => action.payload,
  },
});

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
