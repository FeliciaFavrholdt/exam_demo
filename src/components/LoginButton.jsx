import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoginButton = () => {
  const handleLogin = () => {
    alert("Login functionality coming soon!");
  };

  return <Button onClick={handleLogin}>Login</Button>;
};

export default LoginButton;