import React, { FC } from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";

import { initializeStore } from "../redux/store";

import Header from "../components/Header";
import Post from "../components/Post";

import { loadPosts } from "../redux/actions/blogActions";

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto 50px;
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

interface IHomeProps {
  posts: IPost[];
}

const Home: FC<IHomeProps> = ({ posts }) => (
  <>
    <Header />
    <MainHeading>Latest Posts</MainHeading>
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </Wrapper>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initializeStore();
  const { dispatch, getState } = store;

  await dispatch(loadPosts as any);

  const state = getState();

  return {
    props: {
      posts: state.blog.posts,
    },
  };
};

export default Home;
