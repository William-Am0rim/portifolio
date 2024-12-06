import { styled } from 'styled-components';

export const Container = styled.div`
  font-size: 2.4rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.textSecundary};
  }
  .bg-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${(props) => props.theme.background400};
    border-radius: 0.8rem;
  }
`;
