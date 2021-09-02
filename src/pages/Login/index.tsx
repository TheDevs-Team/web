import React from 'react';
import GlobalStyle from '~/styles/global';
import { Container, MainContainer, ImgContainer, FormContainer } from './styles';
import ImgLogin from '../../assets/login.svg';

export const Login: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MainContainer>
          <ImgContainer>
            <img src={ImgLogin} alt="imgLogin" />
          </ImgContainer>
          <FormContainer />
        </MainContainer>
      </Container>
    </>
  );
};
