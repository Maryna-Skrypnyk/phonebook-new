import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API_KEY = '633db86a7e19b1782914cdf4';
// axios.defaults.baseURL = `https://${API_KEY}.mockapi.io`; // server

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log('contacts ', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, name, number }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${contactId}`, {
        contactId,
        name,
        number,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
};

export default contactsOperations;
