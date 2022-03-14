import { useContext } from "react";
import User from "./User";
import { UsersContext } from "../modules/UsersModule";
import { Table, Spinner } from "react-bootstrap";

const Users = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <Table striped bordered hover size="sm" className="container">
        <thead>
          <tr>
            <th></th>
            <th className="text-start ps-4 py-2">User Name</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user, index) => (
              <User key={user.id} {...user} i={index + 1} />
            ))
          ) : (
            <tr>
              <td></td>
              <td className="d-flex justify-content-center p-3">
                <Spinner animation="border" variant="primary" />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
