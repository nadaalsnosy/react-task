import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UsersModule from "./modules/UsersModule";
import { Spinner } from "react-bootstrap";

import "./App.scss";

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center spiner-div">
          <Spinner animation="border" variant="primary big-spinner" />
        </div>
      }
    >
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signIn/" element={<SignIn />} />
            <Route path="signUp/" element={<SignUp />} />
            <Route path="users/*" element={<UsersModule />} />
            <Route path="*" element={<div>404 - NotFound</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
