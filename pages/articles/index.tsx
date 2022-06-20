import { NextPage } from "next";
import Head from "@components/Head";
import ArticlePreview from "@components/ArticlePreview";
import styled from "styled-components";
import Layout from "@components/Layout";

const ArticlesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ArticlesPage: NextPage = () => {
  return (
    <Layout>
      <Head title="Articles" description="My articles" ogImage="/gorrila" />

      <ArticlesContainer>
        <ArticlePreview
          alt="gorrila"
          imageSrc="/images/test_images/gorrila.png"
          title="Bananas are that way"
          description="Big drawn gorrila has turned its head right in hopes that a ripe banana will be on the horizon.
          When in fact at least a dozen of bananas are standing still to the left of the ape. 
          When will it notice them? It already started desperately screaming"
        />
      </ArticlesContainer>
    </Layout>
  );
};

export default ArticlesPage;
