import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue(
          `User creation error! Try signup again. ${error.message}`,
        );
      }
      if (error.response.status === 500) {
        return thunkAPI.rejectWithValue(
          `Server error! Try signup again later. ${error.message}`,
        );
      }
      return thunkAPI.rejectWithValue(
        `Something went wrong! Try signup again. ${error.message}.`,
      );
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue('Login error! Try login again.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    if (error.response.status === 401) {
      return thunkAPI.rejectWithValue(
        'User creation error! Try signup again. Missing header with authorization token.',
      );
    }
    if (error.response.status === 500) {
      return thunkAPI.rejectWithValue('Server error! Try logout again.');
    }
    return thunkAPI.rejectWithValue(
      `Something went wrong! Try logout again. ${error.message}.`,
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue(
          'Missing authorization! Please try to login or signup.',
        );
      }
      return thunkAPI.rejectWithValue(
        `Something went wrong! Try again later. ${error.message}.`,
      );
    }
  },
);

// const authOperations = {
//   register,
//   login,
//   logout,
//   refreshUser,
// };

// export default authOperations;
