import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from './contacts-api';
import axios from 'axios';

const API_KEY = '633db86a7e19b1782914cdf4';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io`; // server

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchData();
      // console.log('contacts ', contacts);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }

    // return contactsAPI.fetchData().catch(error => rejectWithValue(error));
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.addData({ name, number });
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  (contactId, { rejectWithValue }) => {
    try {
      return contactsAPI.deleteData(contactId);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contactId, { name, number }, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.updateData(contactId, {
        name,
        number,
      });
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
