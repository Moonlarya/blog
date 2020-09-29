import React, { FC } from "react";
import Link from "next/link";
import {
  PostWrapper,
  PostHeading,
  PostBody,
  StyledLink,
  Overflow,
} from "./view";

interface IPostProps {
  data: IPost;
}

const Post: FC<IPostProps> = ({ data: { id, title, body } }) => (
  <PostWrapper>
    <PostHeading>{title}</PostHeading>
    <Overflow />
    <PostBody>{body}</PostBody>
    <Link href={`/posts/${id}`}>
      <StyledLink href={`/posts/${id}`}>Read more...</StyledLink>
    </Link>
  </PostWrapper>
);

export default Post;
