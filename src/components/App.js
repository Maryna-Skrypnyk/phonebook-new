import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux_thunk/auth';
import LocalizationContext from '../context/localization';
import PrivateRoute from './hoc/routes/PrivateRoute';
import PublicRoute from './hoc/routes/PublicRoute';
import Layout from './Layout';
import AppLayout from './AppLayout';
import Spinner from './Spinner';
import ScrollToUp from './ScrollToUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import HomePage from '../pages/HomePage';
// import PhonebookPage from '../pages/PhonebookPage';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';

// const LoginPage = lazy(() =>
//   import('../pages/LoginPage' /* webpackChunkName: "login-page" */),
// );
// const RegistrationPage = lazy(() =>
//   import('../pages/RegistrationPage' /* webpackChunkName: "register-page" */),
// );

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const PhonebookPage = lazy(() =>
  import('../pages/PhonebookPage' /* webpackChunkName: "contacts-page" */),
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Layout>
      <LocalizationContext>
        <ScrollToUp />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route
                index
                element={
                  // <PublicRoute restricted>
                  <HomePage />
                  // </PublicRoute>
                }
              />

              <Route
                path="signup"
                element={
                  <PublicRoute
                    redirectTo="/contacts"
                    component={<RegistrationPage />}
                  />
                }
              />

              <Route
                path="login"
                element={
                  <PublicRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />

              <Route
                path="contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<PhonebookPage />}
                  />
                }
              />

              <Route
                path="/contacts/*"
                element={<Navigate to="/contacts" replace />}
              />

              <Route path="/*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>

        <ToastContainer position="top-left" />
      </LocalizationContext>
    </Layout>
  );
};

export default App;
