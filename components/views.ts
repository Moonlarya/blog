import styled from "styled-components";

export const MainHeading = styled.h1`
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeigths.bold};
  font-family: ${(props) => props.theme.font};
  margin: 50px auto;
  text-align: center;
`;

export const Content = styled.p`
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.light};
  font-family: ${(props) => props.theme.font};
  line-height: 1.75em;
  text-align: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -20px;
    left: -40px;
    width: 15px;
    height: 100px;
    background-color: ${(props) => props.theme.colors.lavender};
  }
  &:after {
    content: "";
    position: absolute;
    top: -35px;
    left: -40px;
    width: 120px;
    height: 15px;
    background-color: ${(props) => props.theme.colors.lavender};
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  padding: 10px;
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.bold};
  font-family: ${(props) => props.theme.font};
  margin: 15px 0;
  border: 1px solid ${(props) => props.theme.colors.gunmetal};
  border-radius: 7px;
`;

export const Textarea = styled.textarea`
  width: 400px;
  height: 300px;
  padding: 10px;
  color: ${(props) => props.theme.colors.gunmetal};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.light};
  font-family: ${(props) => props.theme.font};
  margin: 15px 0;
  border: 1px solid ${(props) => props.theme.colors.gunmetal};
  border-radius: 7px;
  resize: none;
`;
