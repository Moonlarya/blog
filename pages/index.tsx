import React, { FC } from "react";

import { useDispatch } from "react-redux";

// import styled from "styled-components";

import Header from "../components/Header";

const Home: FC<{}> = () => {
  const dispatch = useDispatch();

  dispatch({
    type: "TICK",
    light: true,
    lastUpdate: Date.now(),
  });
  return (
    <>
      <Header />
      <h1>Latest Posts</h1>
    </>
  );
};
export default Home;
