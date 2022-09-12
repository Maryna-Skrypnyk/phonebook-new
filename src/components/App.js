import { Routes, Route, Navigate } from 'react-router-dom';
import LocalizationContext from '../context/localization';
import PrivateRoute from './hoc/routes/PrivateRoute';
import PublicRoute from './hoc/routes/PublicRoute';
import Layout from './Layout';
import Container from './Container';
import AppBar from './AppBar';
import Footer from './Footer';
import ScrollUp from './ScrollUp';
import HomePage from '../pages/HomePage';
import PhonebookPage from '../pages/PhonebookPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Layout>
      <LocalizationContext>
        <AppBar />
        <Container>
          <ScrollUp />

          <Routes>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              path="signin"
              element={
                <PublicRoute>
                  <HomePage />
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
          </Routes>

          <Footer />

          <ToastContainer />
        </Container>
      </LocalizationContext>
    </Layout>
  );
};

export default App;
