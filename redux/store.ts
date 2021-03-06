import { useMemo } from "react";
import {
  createStore,
  applyMiddleware,
  AnyAction,
  CombinedState,
  Store,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let store: Store<CombinedState<IState>, AnyAction>;

const initialState: IState = {
  blog: { posts: [] },
};

function initStore(preloadedState = initialState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
}

export const initializeStore = (preloadedState = initialState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: IState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export type AppDispatch = typeof store.dispatch;
