import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'; //<-- Add this 
import 'bootstrap/dist/js/bootstrap.bundle.min'; // <-- Add this 
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

document.body.style.backgroundColor = "#3d405b"; // replace '#your-color' with your desired color code

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="424626877150-uoq8gegqqgsu7us5vpe63cut3c6708sf.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);