import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: ${(props) => props.theme.colors.gunmetal};
`;

export const Navigation = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.lavender};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.medium};
  font-family: ${(props) => props.theme.font};
  transition: 0.3s all ease-in;

  &:hover {
    color: ${(props) => props.theme.colors.grey};
  }
`;
