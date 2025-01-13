// App.jsx
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ToggleTheme from "./components/ToggleTheme";

const App = () => {
  const [layout, setLayout] = useState(() => localStorage.getItem("layout") || "grid");
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("layout", layout);
  }, [layout]);

  const toggleLayout = (newLayout) => {
    setLayout(newLayout);
  };

  const handleLogin = async (credentials, navigate) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setErrorMessage("");
        navigate("/shop");
      } else {
        throw new Error(data.message || "Invalid username or password.");
      }
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  const handleRegister = async (credentials, navigate) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registration successful! Please log in.");
        navigate("/login");
      } else {
        throw new Error(data.message || "Registration failed.");
      }
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  const PrivateRoute = ({ children }) => {
    const location = useLocation();
    if (!token) {
      return <Navigate to="/login" state={{ from: location.pathname }} />;
    }
    return children;
  };

  return (
    <ToggleTheme>
      {({ toggleTheme, theme }) => (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MainLayout toggleTheme={toggleTheme} toggleLayout={toggleLayout} theme={theme} layout={layout} />}
            >
              <Route index element={<HomePage layout={layout} />} />
              <Route path="shop" element={<ShopPage layout={layout} />} />
              <Route
                path="cart"
                element={
                  <PrivateRoute>
                    <CartPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="login"
                element={<LoginPage handleLogin={handleLogin} errorMessage={errorMessage} />}
              />
              <Route path="register" element={<RegisterPage handleRegister={handleRegister} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </ToggleTheme>
  );
};

export default App;
