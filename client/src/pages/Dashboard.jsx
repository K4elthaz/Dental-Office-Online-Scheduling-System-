import React from "react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      {user ? <h1>Welcome {user.name}</h1> : <h1>You are not logged in</h1>}
    </div>
  );
}
