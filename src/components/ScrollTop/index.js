import styled from 'styled-components';

export const ScrollTopContainerDiv = styled.div`
    width: 48px;
    height: 48px;
    position: fixed;
    bottom: 3rem;
    right: 2rem;
    z-index: 99999;
`;

export const ScrollTopDiv = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .icon-scroll-top{
      font-size: 4.8rem;
      color: ${(props) => props.theme.primaryColor500};
    }
`;
