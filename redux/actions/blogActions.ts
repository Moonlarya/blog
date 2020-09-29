import axios from "axios";

import { SET_POSTS } from "../types";

export const setPosts = (posts: IPost[]) => ({
  type: SET_POSTS,
  payload: posts,
});

export const loadPosts = async (dispatch) => {
  const posts = await axios
    .get("https://simple-blog-api.crew.red/posts")
    .then((response) => response.data);

  dispatch(setPosts(posts));
};
