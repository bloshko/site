import Link from "next/link";
import styled from "styled-components";
import { paths } from "@config/paths";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: sticky;
  height: max-content;

  a {
    :visited {
      color: ${({ theme }) => theme.colors.mainFontColor};
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <Link href={paths.articles} passHref>
        <a>Articles</a>
      </Link>
      <Link href={paths.gallery} passHref>
        <a>Gallery</a>
      </Link>
    </NavContainer>
  );
};

export default Nav;
