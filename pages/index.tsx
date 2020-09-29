import React, { FC } from "react";

import { useDispatch } from "react-redux";

import styled from "styled-components";

import Header from "../components/Header";
import Post from "../components/Post";

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

const MainHeading = styled.h1`
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeigths.bold};
  font-family: ${(props) => props.theme.font};
  margin: 50px auto;
  text-align: center;
`;

const Home: FC<{}> = () => {
  const dispatch = useDispatch();

  dispatch({
    type: "TICK",
    light: true,
    lastUpdate: Date.now(),
  });
  return (
    <>
      <Header />
      <MainHeading>Latest Posts</MainHeading>
      <Wrapper>
        <Post id={1} title="Title" body="Lorem ipsum dolor sit amet" />{" "}
        <Post id={1} title="Title" body="Lorem ipsum dolor sit amet" />{" "}
        <Post id={1} title="Title" body="Lorem ipsum dolor sit amet" />
      </Wrapper>
    </>
  );
};
export default Home;
