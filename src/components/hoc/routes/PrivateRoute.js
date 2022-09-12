import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  const location = useLocation();
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true; // тимчасово

  return isLoggedIn ? children : <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;
