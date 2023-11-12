import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { LoginModal } from "./loginModal";
import "./navbar.css";

const NavBar: React.FC = () => {
  return (
    <>
      <Navbar data-bs-theme="light" style={{ backgroundColor: "#ECEEFF" }}>
        <Container fluid style={{ width: "90%" }}>
          <Link to="/home" className="d-flex linkStyle">
            <Navbar.Brand>
              <div className="d-flex justify-content-center align-items-center">
                <span className="poke-logo"></span>
                <div className="ms-1 fw-bolder">
                  <span className="text-warning">Poké</span>
                  <span className="text-danger">Shop</span>
                </div>
              </div>
            </Navbar.Brand>
          </Link>
          <div className="d-flex">
            <Link
              className="menu-div linkStyle"
              style={{
                width: "8rem",
                margin: "0 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              to="/home"
            >
              Home
            </Link>
            <Link
              className="menu-div linkStyle"
              style={{
                width: "8rem",
                margin: "0 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              to="/features"
            >
              Features
            </Link>
            <Link
              className="menu-div linkStyle"
              style={{
                width: "8rem",
                margin: "0 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              to="/about"
            >
              About
            </Link>
            <Link
              className="menu-div linkStyle"
              style={{
                width: "8rem",
                margin: "0 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              to="/category"
            >
              Category
            </Link>
          </div>
          <Nav>
            <LoginModal />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
