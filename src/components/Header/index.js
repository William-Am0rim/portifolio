import {styled } from "styled-components"

export const Container = styled.header`

display: flex;
align-items: center;
justify-content: space-between;

height: 8rem;
padding: 0 8rem;

background-color: ${(props) => props.theme.background800};
box-shadow: 0 0 16px 0 black;

h2{
  font-family: "Kalam", cursive;
  color: ${(props) => props.theme.textPrimary};
}
ul{
  display: flex;
  gap: 1.6rem;
}
li{
  list-style-type: none;
  color: ${(props) => props.theme.textSecundary};
}

li:hover{
  color: ${(props) => props.theme.textPrimary};
  font-weight: 700;
}

a{
  color: ${(props) => props.theme.textSecundary};
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

a:hover{
  color: ${(props) => props.theme.textPrimary};
  text-decoration: none;
  font-weight: 700;
}

@media only screen and (max-width: 640px) {
  h2{
    font-size: 2.4rem;
  }
  padding: 0 1.6rem;
  height: 6.4rem;
  ul{
    display: none;
  }
}
`