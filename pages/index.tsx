import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <h1>Latest Posts</h1>
    </>
  );
};
export default Home;
