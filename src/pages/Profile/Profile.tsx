/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import GlobalStyles from '../../styles/global';
import { Header } from '~/components';

import { Container, Main, InputContainer, Label, Input, Btn, Select, Option, Form, Span } from './styles';

export const Profile: React.FC = () => {
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [email, setEmail] = useState('');
  const [financial, setFinancial] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');

  const state = {
    name,
    document,
    email,
    financial_status: financial,
    phone,
    type,
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <Form>
            <Span>Editar Dados Básicos</Span>
            <InputContainer>
              <Label>Nome:</Label>
              <Input placeholder="Digite o nome do usuário" onChange={(e: any) => setName(e.target.value)}></Input>
            </InputContainer>
            <InputContainer>
              <Label>Documento:</Label>
              <Input
                placeholder="Digite o documento do usuário"
                onChange={(e: any) => setDocument(e.target.value)}
              ></Input>
            </InputContainer>
            <InputContainer>
              <Label>E-mail:</Label>
              <Input onChange={(e: any) => setEmail(e.target.value)} placeholder="Digite o e-mail do usuário"></Input>
            </InputContainer>
            <InputContainer>
              <Label>Telefone:</Label>
              <Input placeholder="11 99999-9999" onChange={(e: any) => setPhone(e.target.value)}></Input>
            </InputContainer>
            <InputContainer>
              <Label>Senha:</Label>
              <Input
                placeholder="*************"
                type="password"
                onChange={(e: any) => setPhone(e.target.value)}
              ></Input>
            </InputContainer>
            <InputContainer>
              <Label>Confirmar Senha:</Label>

              <Input
                type="password"
                placeholder="*************"
                onChange={(e: any) => setPhone(e.target.value)}
              ></Input>
            </InputContainer>
            <Btn type="submit">Salvar Alterações</Btn>
          </Form>
        </Main>
      </Container>
    </>
  );
};

export default Profile;
