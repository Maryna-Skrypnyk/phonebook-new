import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './auth-operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected]: handleRejected,
    [login.pending]: handlePending,
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected]: handleRejected,

    [logout.pending]: handlePending,
    [logout.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected]: handleRejected,
    [refreshUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [refreshUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// const authReducer = authSlice.reducer;

// export default authReducer;

export default authSlice.reducer;
