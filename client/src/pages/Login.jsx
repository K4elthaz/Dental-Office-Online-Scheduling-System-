import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Button } from "react-bootstrap";

// import { set } from "mongoose";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (!email) {
      toast.error("Email field is required");
      return;
    }

    if (!password) {
      toast.error("Password field is required");
      return;
    }

    try {
      const { data: userData } = await axios.post("/login", {
        email,
        password,
      });
      if (userData.error) {
        toast.error(userData.error);
      } else {
        setUser(userData);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form class="form" onSubmit={login}>
        <p class="title">Welcome back!</p>
        <p class="message">
          Sign in to access your account and explore our app.
        </p>

        <div class="inputForm">
          <input
            type="email"
            placeholder="Enter your Email"
            class="input"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div class="inputForm">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password"
            class="input"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <svg
            onClick={togglePasswordVisibility}
            className="ms-5"
            viewBox="0 0 576 512"
            height="1.5em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <path
              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              fill="#0a9644"
            ></path>
          </svg>
        </div>

        <div class="flex-row">
          <div className=" d-flex align-items-center">
            <input type="checkbox" style={{ cursor: "pointer" }} />
            <label className="ms-2">Remember me </label>
          </div>
          <span class="span">Forgot password?</span>
        </div>
        <div className="d-grid gap-2">
          <Button variant="success" size="lg">
            Sign In
          </Button>
        </div>

        <p class="p">
          Don't have an account? <span class="span">Sign Up</span>
        </p>
      </form>
    </div>
  );
}
