import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  html, body, #__next {
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Space Mono', monospace;
    font-size: 1.6rem;
  }

`;

export const lightTheme = {
  colors: {
    mainFontColor: "#000",
    borderColor: "#000",
    backgroundColor: "#fff",
  },
};

export const darkTheme = {
  colors: {
    mainFontColor: "#fff",
    borderColor: "#fff",
    backgroundColor: "#000",
  },
};
