import React from 'react';
import GlobalStyle from '~/styles/global';

import Input from '~/components/Input/Input';
import { Container, Nav, FormContainer, Header, Title, Button, Span } from './styles';
import logoImg from 'assets/logo.png';

export const Login: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav>
          <img src={logoImg} />
        </Nav>
        <FormContainer>
          <Header>
            <Title>Faça seu login</Title>
          </Header>
          <Input placeholder="E-mail" type="text" />
          <Input placeholder="Senha" type="password" />
          <Button>CONTINUAR</Button>
          <Span>Ainda não sou G2K </Span>
        </FormContainer>
      </Container>
    </>
  );
};
