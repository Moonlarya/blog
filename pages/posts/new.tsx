import React, { FC } from "react";
import styled from "styled-components";

import Header from "../../components/Header";

const MainHeading = styled.h1`
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeigths.bold};
  font-family: ${(props) => props.theme.font};
  margin: 50px auto;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const NewPost: FC<{}> = () => (
  <>
    <Header />
    <MainHeading>New Post</MainHeading>
    <Wrapper />
  </>
);

export default NewPost;
