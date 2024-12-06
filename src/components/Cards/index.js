import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  justify-content: center;

  width: 38.4rem;
  height: 34.4rem;

  background-color: ${(props) => props.theme.background600};
  border-radius: 1.6rem;

  padding: 2.4rem;

.image-card{
    width: 33.6rem;
    height: 16rem;
    background: linear-gradient(to right, #9955E8 0%, #7BFFAF 100%);
    border-radius: 0.8rem 0.8rem 0 0;
  }
.info-card{
  display: flex;
  justify-content: space-between;

  span{
    color: ${(props) => props.theme.textSecundary};
  }
}
.icons-card{
  display: flex;
  gap: 1.6rem;
}

@media only screen and (max-width: 640px){
  width: 31.2rem;
  height: 30.4rem;
  padding: 1.6rem;
  

  .image-card{
    width: 28rem;
    height: 16rem;
    
  }

}

`