import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    const { email, password } = data;
    if (!password) {
      toast.error("Password field is required");
      return;
    }
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.message) {
        setData({ email: "", password: "" });
        toast.success("Login Successful");
        navigate("/dashboard");

      } else {
        toast.error(data.message);
      }
    } catch (error) { 

      toast.error(error.response.data.message);
    }
  };
  
  

  return (
    <div>
      <form onSubmit={login}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
