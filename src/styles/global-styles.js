import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
body{
  background-color: ${(props) => props.theme.background800};
}
body, input, textarea, button{
  font-size: 1.6rem;
  font-family: "Heebo", serif;
}
/* Exemplo de CSS global */
.scrollbar-visible {
  overflow-y: scroll;
}

.scrollbar-hidden {
  overflow-y: hidden;
}

/* Personalização da scrollbar */
::-webkit-scrollbar {
background-color: transparent;
width: 1rem;

}

::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.background600};
  border-radius: 0.8rem;
}
`;

