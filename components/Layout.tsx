import styled, { ThemeProvider } from "styled-components";
import Main from "./Main";
import Nav from "./Nav";
import Footer from "./Footer";

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  padding: 2.5rem;

  color: ${({ theme }) => theme.colors.mainFontColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  @media (width >= 50em) {
    flex-direction: row;
    padding: 5rem;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <Nav />
        <Main>{children}</Main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export default Layout;
