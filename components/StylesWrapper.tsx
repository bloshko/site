import { darkTheme, GlobalStyle, lightTheme } from "@styles/theme";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

interface StylesWrapperProps {
  children: React.ReactNode;
}

const StylesWrapper: React.FC<StylesWrapperProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default StylesWrapper;
