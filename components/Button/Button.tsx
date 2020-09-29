import styled from "styled-components";

const Button = styled.button`
  width: max-content;
  color: ${(props) => props.theme.colors.lavender};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.medium};
  font-family: ${(props) => props.theme.font};
  background-color: ${(props) => props.theme.colors.gunmetal};
  transition: 0.3s all ease-in;
  border: 0px solid;
  border-radius: 7px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => `${props.theme.colors.gunmetal}CC`};
  }
`;
export default Button;
