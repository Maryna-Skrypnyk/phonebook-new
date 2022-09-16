import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LocalizationContext from '../context/localization';
import PrivateRoute from './hoc/routes/PrivateRoute';
import PublicRoute from './hoc/routes/PublicRoute';
import Layout from './Layout';
import AppLayout from './AppLayout';
// import HomePage from '../pages/HomePage';
// import PhonebookPage from '../pages/PhonebookPage';
// import RegistrationPage from '../pages/RegistrationPage';
// import LoginPage from '../pages/LoginPage';
import ScrollToUp from './ScrollToUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.module.scss';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));

const App = () => {
  return (
    <Layout>
      <LocalizationContext>
        <ScrollToUp />
        <Suspense fallback={<div>Loading...</div>}>
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

              {/* <Route path="home" element={<HomePage />} /> */}
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
