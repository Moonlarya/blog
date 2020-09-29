import React, { FC } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";

import Header from "../../components/Header";
import { MainHeading, Wrapper, Content } from "../../components/views";

interface IPostProps {
  data: IPost;
}

const Post: FC<IPostProps> = ({ data: { title, body } }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <MainHeading>{title}</MainHeading>
        <Content>{body}</Content>
      </Wrapper>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const data = await axios(`https://simple-blog-api.crew.red/posts/${id}`).then(
    (response) => response.data
  );

  return {
    props: {
      data,
    },
  };
};

export default Post;
