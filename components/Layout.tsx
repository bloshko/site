import Head from "next/head";
import { GlobalStyle, theme } from "@styles/theme";
import styled, { ThemeProvider } from "styled-components";
import Main from "./Main";
import Nav from "./Nav";
import Footer from "./Footer";

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5rem;

  color: ${({ theme }) => theme.colors.mainFontColor};
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  </>
);

export default Layout;
