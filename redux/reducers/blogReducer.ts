import { SET_POSTS } from "../types";

const initialState = {
  posts: [],
};

const blogReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default blogReducer;
