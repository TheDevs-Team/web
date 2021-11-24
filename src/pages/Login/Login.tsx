/* eslint-disable no-unused-vars */
import React from 'react';
import { Input } from '~/components';
import { Container, Nav, FormContainer, Header, Title, Button, Logo } from './styles';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
};

export const Login: React.FC<Props> = ({ onSubmit, setEmail, setPassword }) => {
  return (
    <Container>
      <Nav>
        <Logo>G2K</Logo>
      </Nav>
      <FormContainer onSubmit={(event) => onSubmit(event)}>
        <Header>
          <Title>Faça seu login</Title>
        </Header>
        <Input placeholder="E-mail" type="text" onChange={(event) => setEmail(event.target.value)} />
        <Input placeholder="Senha" type="password" onChange={(event) => setPassword(event.target.value)} />
        <Button>CONTINUAR</Button>
      </FormContainer>
    </Container>
  );
};
