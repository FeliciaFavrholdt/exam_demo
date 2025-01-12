import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const navStyle = {
  backgroundColor: "#f79a20",
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const navListStyle = {
  display: "flex",
  listStyle: "none",
  gap: "20px",
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  display: "inline",
};

const linkStyle = {
  color: "#5a4b41",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "8px 12px",
  borderRadius: "5px",
  transition: "background-color 0.3s, color 0.3s",
};

const activeLinkStyle = {
  backgroundColor: "#8c6d5a",
  color: "#fff",
};

const hoverLinkStyle = {
  backgroundColor: "#d3c0ad",
  color: "#5a4b41",
};

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <Logo />
      <ul style={navListStyle}>
        <li style={navItemStyle}>
          <NavLink
            to="/"
            end
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
            }
          >
            Home
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/shop"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
            }
          >
            Shop
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/cart"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
