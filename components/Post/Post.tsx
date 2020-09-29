import React, { FC } from "react";
import Link from "next/link";
import { PostWrapper, PostHeading, PostBody, StyledLink } from "./view";

interface IPost {
  id: number;
  title: string;
  body: string;
}

const Post: FC<IPost> = ({ id, title, body }) => (
  <PostWrapper>
    <PostHeading>{title}</PostHeading>
    <PostBody>{body}</PostBody>
    <Link href={`/posts/${id}`}>
      <StyledLink href={`/posts/${id}`}>Read more...</StyledLink>
    </Link>
  </PostWrapper>
);

export default Post;
