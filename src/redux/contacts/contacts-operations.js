import axios from 'axios';
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
} from './contacts-actions';

const API_KEY = '633db86a7e19b1782914cdf4';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/`; // server

// axios.defaults.baseURL = 'http://localhost:3000'; // local server

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact =
  ({ name, number }) =>
  async dispatch => {
    const contact = {
      name,
      number,
    };
    dispatch(addContactRequest());

    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

export const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  //   try {
  //     const { data } = await axios.delete(`contacts/${contactId}`);
  //     dispatch(deleteContactSuccess(data));
  //   } catch (error) {
  //     dispatch(deleteContactError(error));
  //   }

  axios
    .delete(`contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};
