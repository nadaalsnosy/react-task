import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import FormModel from "./FormModel";
import { v4 as uuid } from "uuid";
import { UsersContext } from "../modules/UsersModule";

const AddNewUser = () => {
  const { setUsers } = useContext(UsersContext);

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(true);

  
  const addUser = (user) => {
    setUsers((currentUsers) => [
      ...currentUsers,
      { ...user, id: uuid() },
    ]);
    setShowForm(false);
  };
  
  return (
    <div className="dark-blue">
      <div className=" p-3 px-5 container d-flex justify-content-between">
        <h3 className="text-white">Users</h3>

        <Button
          variant="primary bg-white text-primary fw-bold px-5"
          onClick={handleShowForm}
        >
          Add User
        </Button>
      </div>

      <FormModel onSubmit={addUser} showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};

export default AddNewUser;
