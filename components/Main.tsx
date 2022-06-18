import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 100rem;
  padding: 0 10rem;
`;

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
