import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API_KEY = '633db86a7e19b1782914cdf4';
// axios.defaults.baseURL = `https://${API_KEY}.mockapi.io`; // server

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue(
          'Missing header with authorization token.',
        );
      }
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue('There is no such user collection.');
      }
      return thunkAPI.rejectWithValue(`Server Error! ${error.message}.`);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue('Error creating contact.');
      }
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue(
          'Missing header with authorization token.',
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue(
          'Missing header with authorization token.',
        );
      }
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue('There is no such user collection.');
      }
      return thunkAPI.rejectWithValue(`Server Error! ${error.message}.`);
    }
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ([contactId, { name, number }], thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${contactId}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue('Contact update failed.');
      }
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue(
          'Missing header with authorization token.',
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// const contactsOperations = {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   updateContact,
// };

// export default contactsOperations;
