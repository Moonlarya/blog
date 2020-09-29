import styled from "styled-components";

export const PostWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 20px;
  border-radius: 10px;
`;

export const PostHeading = styled.h3`
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeigths.medium};
  font-family: ${(props) => props.theme.font};
  margin-bottom: 15px;
`;

export const PostBody = styled.p`
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.light};
  font-family: ${(props) => props.theme.font};
  line-height: 1.5em;
  margin-bottom: 15px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.medium};
  font-family: ${(props) => props.theme.font};
  margin-top: 10px;
`;
