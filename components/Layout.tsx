import Head from "next/head";
import Nav from "@components/Nav";
import { GlobalStyle, theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <main> {children}</main>
        <footer></footer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
