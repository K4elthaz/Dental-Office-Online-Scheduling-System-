import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { UserContextProvider } from "../context/userContext";
import AppointmentForm from "./pages/Appointment";
import Test from "./pages/test";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <main
        style={{
          height: "100%",
          minHeight: "100vh",
        }}
      >
        <UserContextProvider>
          <Navbar className="navbar" />
          <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointments" element={<AppointmentForm />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </UserContextProvider>
      </main>
    </>
  );
}

export default App;
