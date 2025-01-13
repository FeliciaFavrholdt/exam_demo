import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import themeIcon from "../assets/images/theme_icon.png";
import HomePage from "../pages/HomePage";

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
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const location = useLocation();

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

  const handleLogin = async (credentials, navigate) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem("token", data.token);
        setToken(data.token);
        navigate("/shop");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };

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
        ) : (
          <Outlet context={{ layout, toggleLayout }} />
        )}
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default MainLayout;
