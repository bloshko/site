import type { NextPage } from "next";
import Layout from "@components/Layout";
import styled from "styled-components";
import Link from "next/link";
import { paths } from "@config/paths";

const HomeNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 38rem;
`;

const PageLink = styled.a`
  :visited {
    color: ${({ theme }) => theme.colors.mainFontColor};
  }
  font-size: 4rem;
`;

const Note = styled.p`
  text-align: end;
`;

const Home: NextPage = () => {
  return (
    <Layout hasNav={false}>
      <HomeNav>
        <Link passHref href={paths.articles}>
          <PageLink>Articles</PageLink>
        </Link>
        <Link passHref href={paths.gallery}>
          <PageLink>Gallery</PageLink>
        </Link>
        <Note>by apepitch</Note>
      </HomeNav>
    </Layout>
  );
};

export default Home;
