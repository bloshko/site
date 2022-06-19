import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import StylesWrapper from "@components/StylesWrapper";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StylesWrapper>
    <Component {...pageProps} />
  </StylesWrapper>
);

export default MyApp;
