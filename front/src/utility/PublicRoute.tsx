import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ session }) => {
  if (!session) {
    return <Navigate to="/feed" replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
