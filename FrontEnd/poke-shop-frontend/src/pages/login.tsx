import React from "react";
import {LoginModal} from "../components/loginModal";
import NavBar from "../components/navbar";

export const Login = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div>
        <NavBar />
      </div>
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <LoginModal />
      </div>
    </div>
  );
};