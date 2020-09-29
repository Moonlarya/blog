import React, { FC } from "react";

import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import Header from "../components/Header";
import Post from "../components/Post";

import { loadPosts } from "../redux/actions/blogActions";
import { RootState } from "../redux/reducers";

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
  const posts = useSelector((state: RootState) => state.blog.posts);
  const dispatch = useDispatch();

  dispatch(loadPosts);
  return (
    <>
      <Header />
      <MainHeading>Latest Posts</MainHeading>
      <Wrapper>
        {posts.map((post) => (
          <Post id={post.id} title={post.title} body={post.body} />
        ))}
      </Wrapper>
    </>
  );
};
export default Home;
