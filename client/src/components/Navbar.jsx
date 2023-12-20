import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./nav.css";
import Logo from "../assets/dental.png";
import { UserContext } from "../../context/userContext";
import axios from "axios";

export default function CustomNavbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await axios.post("/logout");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="coin"
              style={{ maxWidth: "250px" }}
            />
            <span
              className="ms-2"
              style={{ color: "#0a9644", fontSize: "16px" }}
            >
              DentalClinic.
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" className="nav-link">
              Schedule an Appointment
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            {user ? (
              <Link to="#" className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
