import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import User from "../pages/User";
import { useState, useMemo, useEffect, createContext } from "react";
import axios from "axios";

export const UsersContext = createContext();

const UsersModule = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const usersData = res.data;
      usersData.map((u) => (u.id = `${u.id}userId`));
      setUsers(res.data);
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      users,
      setUsers,
    }),
    [users]
  );

  return (
    <UsersContext.Provider value={contextValue}>
      <Routes>
        <Route index element={<Users />} />
        <Route path=":id" element={<User />} />
      </Routes>
    </UsersContext.Provider>
  );
};

export default UsersModule;
