import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  text-align: center;
  padding: 20px;
`;

const IconWrapper = styled.div`
  font-size: 5rem;
  color: #ff6b6b;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

const HomeLink = styled(Link)`
  padding: 10px 20px;
  background-color: #5a4b41;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8c6d5a;
  }
`;

const ReloadButton = styled.button`
  padding: 10px 20px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c9302c;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleRetryClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount >= 2) {
      navigate("/");
    } else {
      alert(`Attempt ${clickCount + 1}: Try again or return to the home page.`);
    }
  };

  return (
    <Container>
      <IconWrapper>
        <FaExclamationTriangle />
      </IconWrapper>
      <Title>404 - Page Not Found</Title>
      <Description>Sorry, the page you are looking for does not exist.</Description>
      <HomeLink to="/">Go Back Home</HomeLink>
      <ReloadButton onClick={handleRetryClick}>Retry</ReloadButton>
    </Container>
  );
};

export default NotFoundPage;


/*<Container>, <Title>, and <HomeLink> are React components using JSX.
<FaExclamationTriangle /> is a React icon component.
The syntax looks like HTML but compiles into JavaScript.*/

