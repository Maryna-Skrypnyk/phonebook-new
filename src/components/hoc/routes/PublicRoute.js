import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux_thunk/auth';

// const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

//   const shouldRedirect = isLoggedIn && restricted;
//   return shouldRedirect ? <Navigate to="/contacts" replace={true} /> : children;
// };

// export default PublicRoute;

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
