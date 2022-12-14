import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
} from './auth-actions';

import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */

export const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error));

    if (error.response.status === 400) {
      return toast.error('User creation error! Try signup again.');
    }

    if (error.response.status === 500) {
      return toast.error('Server error! Try signup again later.');
    }
    return toast.error('Something went wrong! Try signup again.');
  }
};

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */

export const login = credentials => async dispatch => {
  dispatch(loginRequest());
  console.log('credentials ', credentials);

  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    console.log('login ', data);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error));

    if (error.response.status === 400) {
      return toast.error('Login error! Try login again.');
    }
    return toast.error('Something went wrong! Try login again.');
  }
};

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */

export const logout = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));

    if (error.response.status === 401) {
      return toast.error('Missing header with authorization token!');
    }

    if (error.response.status === 500) {
      return toast.error('Server error! Try logout again.');
    }

    return toast.error('Something went wrong! Try logout again.');
  }
};

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */

export const fetchCurrentUser = () => async (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return;
  }

  token.set(persistedToken);

  dispatch(fetchCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/current');
    dispatch(fetchCurrentUserSuccess(data));
  } catch (error) {
    dispatch(fetchCurrentUserError(error));

    if (error.response.status === 401) {
      return toast.error(
        'Missing authorization! Please try to login or signup.',
      );
    }

    return toast.error('Something went wrong! Try again later.');
  }
};

// const authOperations = {
//   register,
//   login,
//   logout,
//   fetchCurrentUser,
// };

// export default authOperations;
