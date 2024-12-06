import { styled } from 'styled-components';

export const Container = styled.body`
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section {
    padding: 10rem 0;
  }

  .presentation {
    display: flex;
    gap: 13.6rem;
    align-items: center;
    justify-content: center;
  }
  .presentation-text {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 59.2rem;
    height: 29.6rem;
  }
  h1 {
    width: 20.5rem;
    height: 5.6rem;
    background: linear-gradient(to right, #9955e8 0%, #7bffaf 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  h2 {
    color: ${(props) => props.theme.textPrimary};
  }

  p {
    color: ${(props) => props.theme.textSecundary};
  }

  .presentation-text-buttons {
    display: flex;
    width: 34.2rem;
    height: 5.6rem;
    gap: 1.6rem;
  }

  .presentation-text-imagens {
    width: 48.8rem;
    height: 51.3rem;
  }
  .aboutMeBody {
    display: flex;
    align-items: center;
    width: 136rem;
    height: 54rem;
    border-radius: 1.6rem;
    gap: 11.6rem;
    background-color: ${(props) => props.theme.background600};
  }
  .aboutMe-info {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    width: 59.2rem;
    height: 34.4rem;
  }

  .info-icons {
    display: flex;
    gap: 2.4rem;
  }
  .aboutMe-icons {
    font-size: 24px;
    color: ${(props) => props.theme.primaryColor400};
  }

  .info-text {
    span {
      color: ${(props) => props.theme.secundaryColor};
    }
    h2 {
      margin: 0.8rem 0 1.6rem 0;
    }
  }
  .projects {
  }
  .projectsBody {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
    height: 82vh;
    span {
      color: ${(props) => props.theme.secundaryColor};
    }
  }
  .projects-text {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.8rem;
  }
  .projects-cards {
    display: flex;
    gap: 3.2rem;

    width: 121.6rem;
    height: 34.4rem;

    a {
      text-decoration: none;
    }
  }
  .contact {
    display: flex;
    justify-content: center;
  }
  .contactBody {
    display: flex;
    width: 136rem;
    height: 54rem;
    align-items: center;
    justify-content: center;
    border-radius: 1.6rem;
    background-color: ${(props) => props.theme.background600};
    gap: 13.6rem;

    form {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
    textarea {
      width: 48.8rem;
      height: 16rem;

      padding: 1.2rem 1.6rem;
      background-color: ${(props) => props.theme.background800};
      border: none;
      border-radius: 0.8rem;
      color: ${(props) => props.theme.textSecundary};
      ::placeholder {
        color: ${(props) => props.theme.textSecundary};
      }
    }
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 59.2rem;
    height: 38.4rem;
    span {
      color: ${(props) => props.theme.secundaryColor};
    }

    a {
      color: ${(props) => props.theme.secundaryColor};
      text-decoration: none;
    }
  }
  .contact-info-sub {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  .bg-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18rem;
    width: 14.5rem;
    border-radius: 50%;
    background: linear-gradient(to right, #9955e8 0%, #7bffaf 100%);
  }
  .contact-avatar {
    border-radius: 50%;
  }

  .contact-icons {
    display: flex;
    gap: 0.8rem;
  }

  footer {
    display: flex;
    height: 11.2rem;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.textSecundary};
  }

  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 1.6rem;
    }
    .presentation {
      flex-direction: column;
      flex-direction: column-reverse;
      .presentation-text {
        width: 31.2rem;
        height: 36rem;
      }
      .presentation-text-imagens {
        width: 31.2rem;
        height: 26.6rem;
      }
      .response-computer {
        width: 31.2rem;
        height: 26.6rem;
      }
    }
    .aboutMeBody {
      width: 36rem;
      height: 86.1rem;
      flex-direction: column;
      gap: 8rem;

      .response-img-about {
        width: 31.2rem;
        height: 25.3rem;
      }
      .aboutMe-info {
        width: 31.2rem;
        height: 47.2rem;
      }
    }
    .projects {
      display: flex;
      justify-content: center;
      padding: 0;
    }
    .projectsBody {
      width: 36rem;
      height: 132.8rem;
      padding: 2.4rem 4.8rem;

      .projects-text {
        width: 31.2rem;
        height: 8.8rem;
        text-align: center;
      }
      .projects-cards {
        flex-direction: column;
        width: 31.2rem;
        height: 100.8rem;
        gap: 2.4rem;
      }
    }

    .contactBody {
      width: 36rem;
      height: 70rem;
      gap: 8rem;
      flex-direction: column;

      .contact-info {
        width: 31.2rem;
        height: 44rem;

        .bg-img {
          height: 17rem;
        }
      }
    }

    footer {
      text-align: center;
      height: 10rem;
      padding: 2.4rem;
    }
  }
`;
