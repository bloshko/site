import Link from "next/link";
import styled from "styled-components";
import { paths } from "@config/paths";
import { useRouter } from "next/router";
import { css } from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  padding: 0;
  justify-content: space-between;

  @media (width >= 50em) {
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    position: fixed;
    top: 0;
  }
`;

const PageLink = styled.a<{ isSelected?: boolean }>`
  :visited {
    color: ${({ theme }) => theme.colors.mainFontColor};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      font-weight: bold;
    `}
`;

const Nav: React.FC = () => {
  const { asPath } = useRouter();

  const isPathSelected = (path: string) => asPath === path;

  return (
    <NavContainer>
      <Link passHref href={paths.articles}>
        <PageLink isSelected={isPathSelected(paths.articles)}>
          Articles
        </PageLink>
      </Link>
      <Link passHref href={paths.gallery}>
        <PageLink isSelected={isPathSelected(paths.gallery)}>Gallery</PageLink>
      </Link>
    </NavContainer>
  );
};

export default Nav;
