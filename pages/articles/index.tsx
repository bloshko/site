import { NextPage } from "next";
import Head from "@components/Head";
import ArticlePreview from "@components/ArticlePreview";
import styled from "styled-components";

const ArticlesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ArticlesPage: NextPage = () => {
  return (
    <>
      <Head title="Articles" description="My articles" ogImage="test" />

      <ArticlesContainer>
        <ArticlePreview
          alt="gorrila"
          imageSrc="/images/test_images/gorrila.png"
          title="Bananas are that way"
          description="Culpa fugiat nisi tempor laboris laborum fugiat sint non cupidatat ipsum cupidatat. Amet enim ut elit eiusmod eiusmod proident ad laboris excepteur. Non excepteur adipisicing aliqua sint irure aliquip eu anim esse.
Sint officia irure irure consectetur esse commodo veniam officia officia aute consequat ad cillum enim. Ipsum exercitation anim ullamco quis elit nisi anim tempor nisi exercitation. Amet laboris aliqua eiusmod quis officia quis nisi esse labore. Cupidatat ex ut anim officia magna et reprehenderit pariatur occaecat esse labore aliquip laborum nostrud. Pariatur exercitation esse do labore dolor voluptate ex deserunt ad minim in nisi magna velit."
        />
        <ArticlePreview
          alt="savage"
          imageSrc="/images/test_images/savage.png"
          title="Savage"
          description="Culpa fugiat nisi tempor laboris laborum fugiat sint non cupidatat ipsum cupidatat. Amet enim ut elit eiusmod eiusmod proident ad laboris excepteur. Non excepteur adipisicing aliqua sint irure aliquip eu anim esse.
Sint officia irure irure consectetur esse commodo veniam officia officia aute consequat ad cillum enim. Ipsum exercitation anim ullamco quis elit nisi anim tempor nisi exercitation. Amet laboris aliqua eiusmod quis officia quis nisi esse labore. Cupidatat ex ut anim officia magna et reprehenderit pariatur occaecat esse labore aliquip laborum nostrud. Pariatur exercitation esse do labore dolor voluptate ex deserunt ad minim in nisi magna velit.
Sunt Lorem nostrud veniam consectetur consequat nisi ad sint qui non. Officia in consectetur aliquip ullamco minim minim ea amet sit magna fugiat ullamco. Aliquip proident adipisicing mollit proident eu nostrud esse excepteur tempor anim esse."
        />

        <ArticlePreview
          alt="noodle head"
          imageSrc="/images/test_images/noodle-head.png"
          title="Noodle Head to say something important in binary noodle language"
          description="Commodo cillum culpa laborum anim voluptate adipisicing id qui.eniam consectetur consequat nisi ad sint qui non. Officia in consectetur aliquip ullamco minim minim ea amet sit magna fugiat ullamco. Aliquip proident adipisicing mollit proident eu nostrud esse excepteur tempor anim esse."
        />
      </ArticlesContainer>
    </>
  );
};

export default ArticlesPage;
