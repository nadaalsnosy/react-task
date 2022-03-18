import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAdminAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(auth);
  return auth.user.admin === true ? (
    <Outlet />
  ) : (
    <Navigate to={"/offers"} state={{ from: location }} replace />
  );
};

export default RequireAdminAuth;
