/// <reference types="next" />
/// <reference types="next/types/global" />

declare interface IPost {
  id?: number;
  title: string;
  body: string;
}

declare interface IAction {
  type: string;
  payload: any;
}

declare interface IState {
  blog: {
    posts: IPost[];
  };
}
