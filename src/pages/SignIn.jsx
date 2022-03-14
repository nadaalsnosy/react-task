import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <Form className="signInForm">
        <h2 className="text-center mb-5 fw-bold">Sign In</h2>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3 text-primary" id="formGridCheckbox">
          <Link className="text-primary text-decoration-none" to={`/`}>
            Forgot Password?
          </Link>
        </Form.Group>
        <div className="text-end">
          <Button variant="primary" type="submit">
            sign in
          </Button>
        </div>
      </Form>
      <div>
        Need an Account?{" "}
        <Link className="text-primary text-decoration-none" to={`/signUp`}>
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
