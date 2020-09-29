import React, { FC } from "react";
import Link from "next/link";
import { HeaderContainer, Navigation, StyledLink } from "./view";

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
