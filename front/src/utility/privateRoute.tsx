import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ session }) => {
  if (!session) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
