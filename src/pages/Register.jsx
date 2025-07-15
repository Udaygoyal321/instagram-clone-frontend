// src/pages/Register.jsx
import React from "react";
import AuthForm from "../components/AuthForm";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const res = await api.post("/auth/register", data);
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      console.log("REGISTER ERROR:", err); // ✅ Add this line
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
};

export default Register;
