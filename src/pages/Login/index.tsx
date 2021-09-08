/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import GlobalStyle from '~/styles/global';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logoImg from 'assets/logo.png';
import Input from '~/components/Input/Input';
import { Container, Nav, FormContainer, Header, Title, Button, Span } from './styles';

import api from '~/api/user.api';

export const Login: React.FC = () => {
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const notify = (value) => toast.error(value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.Login({ email, password });

    if (response) {
      await localStorage.setItem('@g2k:token', response.data.token);

      return (window.location.href = 'www.google.com');
    }
    return notify('Email/Senha Incorretos!');
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav>
          <img src={logoImg} />
        </Nav>
        <FormContainer onSubmit={(event) => handleSubmit(event)}>
          <Header>
            <Title>Faça seu login</Title>
          </Header>
          <Input placeholder="E-mail" type="text" onChange={(event) => setEmail(event.target.value)} />
          <Input placeholder="Senha" type="password" onChange={(event) => setPassword(event.target.value)} />
          <Button>CONTINUAR</Button>
          <ToastContainer />
          <Span>Ainda não sou G2K </Span>
        </FormContainer>
      </Container>
    </>
  );
};
