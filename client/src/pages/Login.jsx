import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login/", data)
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          Navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
    console.log("Login form submitted");
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
