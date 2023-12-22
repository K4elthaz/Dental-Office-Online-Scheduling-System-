import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function PrivateRoute({ element: Element }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Element />;
}

export default PrivateRoute;