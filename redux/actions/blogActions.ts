import PostService from "../../services/PostService";
import { AppDispatch } from "../store";
import { SET_POSTS } from "../types";

export const setPosts = (posts: IPost[]) => ({
  type: SET_POSTS,
  payload: posts,
});

export const loadPosts = async (dispatch: AppDispatch): Promise<void> => {
  const posts = await PostService.getAll();

  dispatch(setPosts(posts));
};
