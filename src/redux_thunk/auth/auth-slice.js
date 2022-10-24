import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  // isLoading: false,
  // error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // [authOperations.register.pending](state, _) {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    // [authOperations.register.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    // [authOperations.login.pending](state, _) {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    // [authOperations.login.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    //   state.isLoggedIn = false;
    // },

    // [authOperations.logout.pending](state, _) {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    [authOperations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // [authOperations.logout.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    //   state.isLoggedIn = true;
    // },
    [authOperations.refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
