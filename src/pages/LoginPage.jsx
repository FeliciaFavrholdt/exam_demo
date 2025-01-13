import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Form = styled.form`
  background-color: ${({ theme }) => theme.body};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 250px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const LoginPage = ({ handleLogin, handleRegister, errorMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.from === "/cart") {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ username, password }, navigate);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {showError && (
          <ErrorMessage>You must be logged in to view your Cart.</ErrorMessage>
        )}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
        <Button type="button" onClick={() => navigate("/register")}>Switch to Register</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginPage;
