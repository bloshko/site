import Link from "next/link";
import styled from "styled-components";
import { paths } from "@config/paths";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
