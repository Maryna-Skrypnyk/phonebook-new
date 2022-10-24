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
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
