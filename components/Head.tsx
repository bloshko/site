import HeadBase from "next/head";

interface HeadProps {
  title: string;
  description: string;
  ogImage: string;
  ogDescription?: string;
  ogTitle?: string;
  children?: React.ReactNode;
}

const Head: React.FC<HeadProps> = ({
  title,
  description,
  ogImage,
  ogTitle,
  ogDescription,
  children,
}) => (
  <HeadBase>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:description" content={ogDescription || description} />
    <meta property="og:title" content={ogTitle || title} />
    {children}
  </HeadBase>
);

export default Head;
