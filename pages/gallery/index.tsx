import { NextPage } from "next";
import Head from "@components/Head";
import Layout from "@components/Layout";

const GalleryPage: NextPage = () => {
  return (
    <Layout>
      <Head title="Gallery" description="My gallery" ogImage="test" />
      <div>Gallery</div>
    </Layout>
  );
};

export default GalleryPage;
