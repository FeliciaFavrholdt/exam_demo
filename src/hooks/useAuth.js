import { useState, useEffect } from "react";
import { mockLogin, mockRegister } from "../api/mockBackend";

const useAuth = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const [userRole, setUserRole] = useState(null);

  const isTokenExpired = (token) => {
    if (!token) return true;
    const payload = JSON.parse(atob(token));
    return payload.exp * 1000 < Date.now();
  };

  useEffect(() => {
    if (token && isTokenExpired(token)) {
      handleLogout();
      alert("Session expired. Please log in again.");
    } else if (token) {
      const payload = JSON.parse(atob(token));
      setUserRole(payload.role);
    }
  }, [token]);

  const handleLogin = async (credentials, navigate) => {
    try {
      console.log("[Auth] Attempting login for:", credentials.username);
      const data = await mockLogin(credentials);
      sessionStorage.setItem("token", data.token);
      setToken(data.token);
      console.log("[Auth] Login successful, navigating to /shop");
      navigate("/shop");
    } catch (error) {
      console.error("[Auth] Login failed:", error.message);
      alert(error.message || "Login failed.");
    }
  };

  const handleRegister = async (credentials, navigate) => {
    try {
      console.log("[Auth] Attempting registration for:", credentials.username);
      const data = await mockRegister(credentials);
      sessionStorage.setItem("token", data.token);
      setToken(data.token);
      console.log("[Auth] Registration successful, navigating to /shop");
      navigate("/shop");
      alert("Registration successful! You are now logged in.");
    } catch (error) {
      console.error("[Auth] Registration failed:", error.message);
      alert(error.message || "Registration failed.");
    }
  };

  const handleLogout = () => {
    console.log("[Auth] Logging out user");
    sessionStorage.removeItem("token");
    setToken(null);
    setUserRole(null);
    alert("You have been logged out.");
  };

  return { token, userRole, handleLogin, handleRegister, handleLogout, isTokenExpired };
};

export default useAuth;
