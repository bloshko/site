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

  @media (min-width: 50em) {
    flex-direction: row;
    padding: 5rem;
  }

  @media (min-width: 100em) {
    padding-left: 30rem;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
  hasNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hasNav = true }) => {
  return (
    <>
      <LayoutWrapper>
        {hasNav && <Nav />}
        <Main>{children}</Main>
        <Footer />
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export default Layout;
