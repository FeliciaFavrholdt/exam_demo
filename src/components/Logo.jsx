import { NavLink } from "react-router-dom";

const logoStyle = {
  height: "40px",
  marginRight: "20px",
};

const Logo = () => {
  return (
    <NavLink to="/">
      <img src="/images/logo.png" alt="Logo" style={logoStyle} />
    </NavLink>
  );
};
export default Logo;
