import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  html, body, #__next {
    min-width: 100%;
    min-width:100%;
    margin: 0;
    padding: 0;
    font-family: 'Space Mono', monospace;
    font-size: 1.6rem;
  }

`;

export const theme = {
  colors: {
    mainFontColor: "#000",
  },
};
