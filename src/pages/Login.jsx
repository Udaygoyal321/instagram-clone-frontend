// src/pages/Login.jsx
import React from "react";
import AuthForm from "../components/AuthForm";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id); // ✅ Add this line

      navigate("/");
    } catch (err) {
      alert(err.response.data.message || "Login failed");
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;
