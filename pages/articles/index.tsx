import { NextPage } from "next";
import Head from "@components/Head";

const ArticlesPage: NextPage = () => {
  return (
    <>
      <Head title="Articles" description="My articles" ogImage="test" />
      <div>Articles</div>
    </>
  );
};

export default ArticlesPage;
