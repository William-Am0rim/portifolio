import { styled } from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.pos === 'right' ? 'row-reverse' : 'row')};
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.textPrimary};
  gap: 0.8rem;
  text-decoration: none;

  width: ${(props) => (props.width === '22.5rem' ? '22.5rem' : '16.6rem')};
  height: 5.6rem;

  border: none;
  border-radius: 0.8rem;

  cursor: pointer;
  .icon {
    font-size: 20px;
  }
`;
