import axios from 'axios';

const API_KEY = '633db86a7e19b1782914cdf4';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/`; // server

export async function fetchData() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addData({ name, number }) {
  const contact = {
    name,
    number,
  };
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteData(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data.contactId;
}

export async function updateData(contactId, { name, number }) {
  const contact = {
    name,
    number,
  };
  const { data } = await axios.put(`/contacts/${contactId}`, contact);
  return data;
}
