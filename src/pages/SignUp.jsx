import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <>
      <Form className="signInForm">
        <h2 className="text-center mb-5 fw-bold">Sign Up</h2>

        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="text-end mt-5">
          <Button variant="primary" type="submit">
            sign up
          </Button>
        </div>
      </Form>
      <div>
        Already have an account?{" "}
        <Link className="text-primary text-decoration-none" to={`/signIn`}>
          Sign In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
