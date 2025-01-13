// MainLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import themeIcon from "../assets/images/theme_icon.png";
import HomePage from "../pages/HomePage";
import useAuth from "../hooks/useAuth";
import ProtectedRoute from "../routes/ProtectedRoute";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: 20px;
`;

const MainLayout = ({ toggleTheme, theme }) => {
  const [layout, setLayout] = useState("grid");
  const location = useLocation();
  const { token, userRole, handleLogin, handleRegister, handleLogout, isTokenExpired } = useAuth();

  useEffect(() => {
    if (location.pathname === "/") {
      const savedLayout = localStorage.getItem("layout") || "grid";
      setLayout(savedLayout);
    }
  }, [location]);

  const toggleLayout = () => {
    if (location.pathname === "/") {
      const newLayout = layout === "grid" ? "flex" : "grid";
      setLayout(newLayout);
      localStorage.setItem("layout", newLayout);
    }
  };

  const publicRoutes = ["/login", "/register"];

  return (
    <LayoutContainer>
      <NavBar 
        toggleTheme={toggleTheme} 
        toggleLayout={toggleLayout} 
        theme={theme} 
        themeIcon={themeIcon} 
        handleLogout={handleLogout} 
      />
      <ContentWrapper>
        {location.pathname === "/" ? (
          <HomePage layout={layout} />
        ) : publicRoutes.includes(location.pathname) ? (
          <Outlet context={{ layout, toggleLayout, handleLogin, handleRegister }} />
        ) : (
          <ProtectedRoute token={token} userRole={userRole} isTokenExpired={isTokenExpired} roles={["user", "admin"]}>
            <Outlet context={{ layout, toggleLayout, handleLogin, handleRegister }} />
          </ProtectedRoute>
        )}
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default MainLayout;
