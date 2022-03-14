import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  UserDetails from "../components/UserDetails";
import { UsersContext } from "../modules/UsersModule";

const UserPage = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const { users } = useContext(UsersContext);
  console.log(id);

  console.log(users);

  useEffect(() => {
    if (users?.length) {
      setUser(users.find((u) => u.id === id));
      //   console.log(u.id);
      console.log(id);
    }
  }, [id, users]);

  console.log(user);

  return <UserDetails {...user} />;
};

export default UserPage;
