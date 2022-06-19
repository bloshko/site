import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 70rem;
  margin-top: 2.5rem;

  @media (width >= 50em) {
    margin-left: 17rem;
    margin-top: 0;
  }
`;

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
