import React, { FC } from "react";

import Header from "../../components/Header";
import { MainHeading, Wrapper, Content } from "./views";

const Post: FC<{}> = () => (
  <>
    <Header />
    <Wrapper>
      <MainHeading>Title</MainHeading>
      <Content>
        Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      </Content>
    </Wrapper>
  </>
);

export default Post;
