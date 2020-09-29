import styled from "styled-components";

export const PostWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 20px;
  border-radius: 10px;
  background: ${(props) => `${props.theme.colors.lavender}80`};
  height: 150px;
  min-width: min-content;
  position: relative;
  overflow: hidden;
`;

export const PostHeading = styled.h3`
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.bold};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font};
  margin-bottom: 15px;
`;

export const Overflow = styled.div`
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(230, 230, 230, 1) 43%,
    rgba(184, 183, 183, 0) 100%
  );
  height: 100px;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const PostBody = styled.p`
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.light};
  font-family: ${(props) => props.theme.font};
  line-height: 1.5em;
  margin-bottom: 30px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.medium};
  font-family: ${(props) => props.theme.font};
  transition: 0.3s all ease-in;
  position: absolute;
  bottom: 25px;
  left: 20px;
  z-index: 99;

  &:hover {
    color: ${(props) => props.theme.colors.steelTeal};
  }
`;
