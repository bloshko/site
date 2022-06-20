import Link from "next/link";
import styled from "styled-components";
import { paths } from "@config/paths";
import { useRouter } from "next/router";
import { css } from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  padding: 0;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (min-width: 50em) {
    margin: 0;
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

const HomeLinkContainer = styled.div`
  @media (min-width: 50em) {
    position: absolute;
    top: 5rem;
  }
`;

const HomeLink = styled.a`
  text-decoration: none;
  font-weight: bold;

  :visited {
    color: ${({ theme }) => theme.colors.mainFontColor};
  }
`;

const Nav: React.FC = () => {
  const { asPath } = useRouter();

  const isPathSelected = (path: string) => asPath === path;

  return (
    <NavContainer>
      <HomeLinkContainer>
        <Link passHref href={paths.home}>
          <HomeLink>apepitch</HomeLink>
        </Link>
      </HomeLinkContainer>
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
