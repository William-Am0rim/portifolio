import { styled } from "styled-components";

export const Container = styled.input`
  width: 48.8rem;
  height: 4.8rem;

  padding: 1.2rem 1.6rem;
  background-color: ${(props) => props.theme.background800};
  border: none;
  border-radius: 0.8rem;
  color: ${(props) => props.theme.textSecundary};
  ::placeholder{
    color: ${(props) => props.theme.textSecundary};
  }
`