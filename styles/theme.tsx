import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 16px;
  }

  html, body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Space Mono', monospace;
  }

`;

export const theme = {
  colors: {
    primary: "#000",
  },
};
