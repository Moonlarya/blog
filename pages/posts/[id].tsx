import React, { FC } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Header from "../../components/Header";
import { MainHeading, Wrapper, Content } from "../../components/views";

const Post: FC<IPost> = () => {
  const router = useRouter();
  const id = router.asPath.replace("/posts/", "");
  const fetchData = async (id) => {
    return axios(`https://simple-blog-api.crew.red/posts/${id}`);
  };
  fetchData(id);

  return (
    <>
      <Header />
      <Wrapper>
        <MainHeading>Title</MainHeading>
        <Content>
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum orem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsum
        </Content>
      </Wrapper>
    </>
  );
};

export default Post;
