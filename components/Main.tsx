import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  max-width: 70rem;
  flex: 1;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 50em) {
    margin-left: 17rem;
    margin-top: 0;
  }
`;

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
