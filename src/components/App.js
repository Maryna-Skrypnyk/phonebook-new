import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

import './App.module.scss';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
// const LoginPage = lazy(() =>
//   import('../pages/LoginPage' /* webpackChunkName: "login-page" */),
// );
// const RegistrationPage = lazy(() =>
//   import('../pages/RegistrationPage' /* webpackChunkName: "register-page" */),
// );
const PhonebookPage = lazy(() =>
  import('../pages/PhonebookPage' /* webpackChunkName: "contacts-page" */),
);

const App = () => {
  return (
    <Layout>
      <LocalizationContext>
        <ScrollToUp />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="signup"
                element={
                  <PublicRoute>
                    <RegistrationPage />
                  </PublicRoute>
                }
              />

              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <PhonebookPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>

        <ToastContainer />
      </LocalizationContext>
    </Layout>
  );
};

export default App;
