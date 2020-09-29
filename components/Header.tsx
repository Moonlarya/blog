import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

const Navigation = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.onyx};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigth.middle};
  font-family: ${(props) => props.theme.font};
`;

const Header: FC<{}> = () => (
  <HeaderContainer>
    <Navigation>
      <Link href="/">
        <StyledLink href="/">Blog</StyledLink>
      </Link>
      <Link href="/posts/new">
        <StyledLink href="/posts/new">New post</StyledLink>
      </Link>
    </Navigation>
  </HeaderContainer>
);

export default Header;
