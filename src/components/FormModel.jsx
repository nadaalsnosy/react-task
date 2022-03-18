import { Modal, Button, Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

const defaultUser = {
  id: "",
  name: "",
  email: "",
  phone: "",
  address: {
    city: "",
    street: "",
    suite: "",
  },
};

const FormModel = (props) => {
  const { onSubmit, showForm, setShowForm, user } = props;

  const [currentUser, setCurrentUser] = useState(user || defaultUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((u) => ({ ...u, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((u) => ({ ...u, address: { ...u.address, [name]: value } }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(currentUser);
  };

  useEffect(() => {
    setCurrentUser(user || defaultUser);
  }, [showForm, user]);

  const handleClose = () => setShowForm(false);
  return (
    <>
      <Form>
        <Modal show={showForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="m-auto text-orange">
              User Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-5">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="ms-2">Name</Form.Label>
              <Form.Control
                className="bg-light"
                placeholder="eg: John Doe"
                name="name"
                value={currentUser.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label className="ms-2">Email Address</Form.Label>
              <Form.Control
                className="bg-light"
                placeholder="eg: johndoe@gmail.com"
                name="email"
                value={currentUser.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress3">
              <Form.Label className="ms-2">Phone</Form.Label>
              <Form.Control
                className="bg-light"
                placeholder="eg: 0112345678"
                name="phone"
                value={currentUser.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Row className="mb-3 justify-content-between">
              <Form.Group className="col-3" controlId="formGridCity">
                <Form.Label className="ms-2">City</Form.Label>
                <Form.Control
                  className="bg-light"
                  placeholder="city"
                  name="city"
                  value={currentUser.address.city}
                  onChange={handleAddressChange}
                />
              </Form.Group>

              <Form.Group className="col-3" controlId="formGridState">
                <Form.Label className="ms-2">Street</Form.Label>
                <Form.Control
                  className="bg-light"
                  placeholder="street"
                  name="street"
                  value={currentUser.address.street}
                  onChange={handleAddressChange}
                />
              </Form.Group>

              <Form.Group className="col-3" controlId="formGridZip">
                <Form.Label className="ms-2">Suite</Form.Label>
                <Form.Control
                  className="bg-light"
                  placeholder="suite"
                  name="suite"
                  value={currentUser.address.suite}
                  onChange={handleAddressChange}
                />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer className="p-3 px-4">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary px-5" onClick={handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default FormModel;
