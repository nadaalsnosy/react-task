import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import { Spinner } from "react-bootstrap";
import "./App.scss";

import Navbar from "./components/Navbar";
import UsersModule from "./modules/UsersModule";
import RequireAuth from "./components/RequireAuth";
import RequireAdminAuth from "./components/RequireAdminAuth";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Offers from "./pages/Offers";
import ContactUs from "./pages/ContactUs";
import Euro from "./pages/Euro";
import Dollar from "./pages/Dollar";
import Pound from "./pages/Pound";

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
          <AuthProvider>
            <Navbar />
            <Routes>
              {/* <Route element={<RequireAuth />}> */}
              <Route path="/" element={<Home />} />
              <Route path="signIn/" element={<SignIn />} />
              <Route path="signUp/" element={<SignUp />} />
              <Route path="users/*" element={<UsersModule />} />
              {/* </Route> */}

              <Route element={<RequireAuth />}>
                <Route path="offers/" element={<Offers />} />

                <Route element={<RequireAdminAuth />}>
                  <Route path="contactUs/" element={<ContactUs />} />
                </Route>

                <Route path="currency/pound/" element={<Pound />} />
                <Route path="currency/euro/" element={<Euro />} />
                <Route path="currency/dollar/" element={<Dollar />} />
              </Route>

              <Route path="*" element={<div>404 - NotFound</div>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
