import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import FormModel from "./FormModel";
import { UsersContext } from "../modules/UsersModule";

const UserDetails = (props) => {
  const { setUsers } = useContext(UsersContext);

  const user = props;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  console.log('user');
  console.log(user);

  const updateUser = (user) => {
    setUsers((currentUsers) => [...currentUsers, { ...user }]);
    setShow(false);
  };

  return (
    <>
      <Card className="text-center">
        <Card.Header className="text-primary fs-5">User Details</Card.Header>
        <Card.Body className="container">
          <Card.Title className="mb-3 fw-bold">{user.name}</Card.Title>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>Phone: {user.phone}</Card.Text>
          <Card.Text>
            Address: {user.address.suite} {user.address.street}
            {", "}
            {user.address.city}
          </Card.Text>
          <div className="d-flex justify-content-between px-5">
            <Link to={`/users`}>
              <Button variant="secondary">Go Back</Button>
            </Link>
            <div>
              <Button variant="primary mx-4" onClick={handleShow}>
                Edit
              </Button>
              <Button variant="danger">Delete</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <FormModel
        onSubmit={updateUser}
        user={user}
        show={show}
        setShow={setShow}
      />
    </>
  );
};

UserDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.object,
};

UserDetails.defaultProps = {
  id: "UnKNOWN",
  name: "ANONYMOUS USER",
  email: "anonymous@gmail.com",
  phone: "01234567890",
  address: {
    city: "cairo",
    street: "naser.st",
    suite: "10",
  },
};

export default UserDetails;
