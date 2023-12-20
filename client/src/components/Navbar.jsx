import React,{useContext} from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Container, Button } from "react-bootstrap";
import "./nav.css";
import Logo from "../assets/dental.png";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
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
    <Container fluid>
      <div className="navigations">
        <img src={Logo} alt="logo" className="coin" />
        <Nav className="nav-links" activeKey="/">
          <Link to="/" className="nav-link"><h5>Home</h5></Link>
          <Link to="/register" className="nav-link"><h5>Register</h5></Link>
          <Link to="/login" className="nav-link"><h5>Login</h5></Link>
        </Nav>
        <div className="button-container">
        <Button onClick={handleLogout}>Logout</Button>
          <Button>Schedule an Appointment</Button>
        </div>
      </div>
      <hr></hr>
    </Container>
  );
}
