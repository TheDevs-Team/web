/* eslint-disable no-unused-vars */
import React from 'react';

import logoImg from 'assets/png/logo.png';
import { Input } from '~/components';
import { Container, Nav, FormContainer, Header, Title, Button, Span } from './styles';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
};

export const Login: React.FC<Props> = ({ onSubmit, setEmail, setPassword }) => {
  return (
    <Container>
      <Nav>
        <img src={logoImg} />
      </Nav>
      <FormContainer onSubmit={(event) => onSubmit(event)}>
        <Header>
          <Title>Faça seu login</Title>
        </Header>
        <Input placeholder="E-mail" type="text" onChange={(event) => setEmail(event.target.value)} />
        <Input placeholder="Senha" type="password" onChange={(event) => setPassword(event.target.value)} />
        <Button>CONTINUAR</Button>
        <Span>Ainda não sou G2K </Span>
      </FormContainer>
    </Container>
  );
};
