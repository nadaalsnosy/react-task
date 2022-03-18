import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const SignInPage = () => {
  const userRef = useRef();
  const navigate = useNavigate();

  const { auth, setAuth } = useAuth();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  });

  useEffect(() => {
    setErrMsg("");
  }, [userEmail, userPassword]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setAuth({ token, user });
  }, [setAuth]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/signIn",
        JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
        {
          headers: { "content-type": "application/json" },
        }
      );

      const token = res?.data?.token;
      const user = res?.data?.user;

      setAuth({ token, user });

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log(res);
      console.log(token);
      console.log(user);

      setUserEmail("");
      setUserPassword("");
      navigate("/users");
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Invalid Email or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Faild");
      }
      console.log(err);
    }
  };

  return (
    <>
      <Form className="signInForm" onSubmit={handelSubmit}>
        <h2 className="text-center mb-5 fw-bold">Sign In</h2>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={errMsg ? "errInput" : ""}
            type="email"
            placeholder="Enter email"
            ref={userRef}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <p
            className={`errMsg ${errMsg ? "shown" : "hidden"} `}
            aria-live="assertive"
          >
            {errMsg}
          </p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={errMsg ? "errInput" : ""}
            type="password"
            placeholder="Password"
            ref={userRef}
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <p
            className={`errMsg ${errMsg ? "shown" : "hidden"} `}
            aria-live="assertive"
          >
            {errMsg}
          </p>
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
