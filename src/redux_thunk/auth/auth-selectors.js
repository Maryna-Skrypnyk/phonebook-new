const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsRefreshing = state => state.auth.isRefreshing;

// const getLoading = state => state.auth.isLoading;

// const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  // getLoading,
  // getError,
  getIsRefreshing,
};

export default authSelectors;
