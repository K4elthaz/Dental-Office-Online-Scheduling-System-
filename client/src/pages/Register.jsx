import React, { useState } from "react";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const register = (e) => {
    e.preventDefault();
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
          placeholder="Enter Confirm Password"
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
