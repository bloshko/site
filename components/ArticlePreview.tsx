import styled, { CSSProperties } from "styled-components";
import Image, { StaticImageData } from "next/image";

const ArticlePreviewContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0 0 1.5rem 0;
`;

const Description = styled.p`
  margin: 1rem 0;
`;

const ImageContainer = styled.div`
  position: relative;

  height: 40rem;
`;

interface ArticlePreviewProps {
  title: string;
  description: string;
  alt: string;
  imageSrc: StaticImageData | string;
  objectPosition?: CSSProperties["objectPosition"];
  objectFit?: CSSProperties["objectFit"];
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  description,
  imageSrc,
  alt,
  objectPosition = "center center",
  objectFit = "contain",
}) => {
  return (
    <ArticlePreviewContainer>
      <Title>{title}</Title>
      <ImageContainer>
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit={objectFit}
          objectPosition={objectPosition}
        />
      </ImageContainer>

      <Description>{description}</Description>
    </ArticlePreviewContainer>
  );
};

export default ArticlePreview;
