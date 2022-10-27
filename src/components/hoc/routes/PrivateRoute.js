import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux_thunk/auth';

// const PrivateRoute = ({ children, ...routeProps }) => {
//   const location = useLocation();
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

//   return isLoggedIn ? children : <Navigate to="/" state={{ from: location }} />;
// };

// export default PrivateRoute;

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoading = useSelector(authSelectors.getLoading);

  const shouldRedirect = !isLoggedIn && !isLoading;

  return shouldRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} />
  ) : (
    Component
  );
};

export default PrivateRoute;
