import { NextPage } from "next";
import Head from "@components/Head";

const GalleryPage: NextPage = () => {
  return (
    <>
      <Head title="Gallery" description="My gallery" ogImage="test" />
      <div>Gallery</div>
    </>
  );
};

export default GalleryPage;
