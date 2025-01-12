import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

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

const NotFoundPage = () => {
  return (
    <Container>
      <IconWrapper>
        <FaExclamationTriangle />
      </IconWrapper>
      <Title>404 - Page Not Found</Title>
      <Description>Sorry, the page you are looking for does not exist.</Description>
      <HomeLink to="/">Go Back Home</HomeLink>
    </Container>
  );
};

export default NotFoundPage;