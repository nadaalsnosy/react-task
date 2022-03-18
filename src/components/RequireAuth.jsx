import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const RequireAuth = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const { auth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localUser = localStorage.getItem("user");
    try {
      if (localToken) {
        setToken(localToken);
      } else {
        setToken(auth.token);
      }
      if (localUser) {
        setUser(JSON.parse(localUser));
      } else {
        setUser(auth.user);
      }
    } catch (error) {
      console.log(error);
    }
  }, [auth]);
  console.log(auth);

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to={"/signIn"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
