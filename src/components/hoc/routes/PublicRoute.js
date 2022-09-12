import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true; // тимчасово

  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};

export default PublicRoute;
