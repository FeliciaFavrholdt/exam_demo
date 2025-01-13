// NavBar.jsx
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import themeIcon from "../assets/images/theme_icon.png";

const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.body};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    position: relative;
    padding-bottom: 5px;
    transition: color 0.3s ease;
  }

  a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transition: width 0.3s ease;
  }

  a:hover::after,
  a.active::after {
    width: 100%;
  }

  a:hover,
  a.active {
    color: black;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ToggleButton = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

const ThemeIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const NavBar = ({ toggleTheme, toggleLayout, layout }) => {
  const handleToggleLayout = () => {
    const newLayout = layout === "grid" ? "flex" : "grid";
    toggleLayout(newLayout);
    localStorage.setItem("layout", newLayout);
  };

  return (
    <NavContainer>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/shop">Shop</NavLink></NavItem>
        <NavItem><NavLink to="/cart">Cart</NavLink></NavItem>
        <NavItem><NavLink to="/login">Login</NavLink></NavItem>
      </NavList>
      <ButtonContainer>
        <ToggleButton onClick={handleToggleLayout} key={layout}>
          {layout === "grid" ? "Switch to Flexbox" : "Switch to Grid"}
        </ToggleButton>
        <ThemeIcon src={themeIcon} alt="Toggle Theme" onClick={toggleTheme} />
      </ButtonContainer>
    </NavContainer>
  );
};

export default NavBar;
