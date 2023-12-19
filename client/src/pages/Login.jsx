import React, { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={(e) => setData({ ...data, name: e.target.value })}
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
