import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "../components/LoginButton";
import NavBar from "../components/NavBar";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
`;

const MainLayout = () => {
  return (
    <LayoutContainer>
      <Header>
        <NavBar />
        <LoginButton />
      </Header>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default MainLayout;
