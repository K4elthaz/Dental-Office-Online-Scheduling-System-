import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const register = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = data;

    // Client-side validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Sending only required data to the server
      const response = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (response.data.error) {
        setData({ name: "", email: "", password: "", confirmPassword: "" });
        toast.success("Registered Successfully");
        navigate("/login");
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error("Fill all the fields");
    }
  };

  return (
    <div>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="Enter Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={data.confirmPassword}
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}