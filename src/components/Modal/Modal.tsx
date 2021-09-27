/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/*  eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Content, CloseContainer, Form, InputContainer, Label, Input, Btn } from './styles';

type Props = {
  onClose: () => void;
};

export const Modal: React.FC<Props> = ({ onClose = () => {} }) => {
  // State dos campos do form
  const [name, setName] = useState();
  const [document, setDocument] = useState();
  const [email, setEmail] = useState();
  const [financial, setFinancial] = useState();
  const [status, setStatus] = useState();

  // Guardando valores do form
  const state: any = {
    name,
    document,
    email,
    financial,
    status,
  };

  // Função para enviar form para o backend
  //const handleFormSubmit = async (e: any, state: any) => {
  //  e.preventDefault();

  // await api.post('products', state);

  // Recarregando página após o submit
  //return window.location.reload();
  //};

  //<Form onSubmit={(e) => handleFormSubmit(e, state)}>

  return (
    <Container>
      <Content>
        <CloseContainer>
          <AiOutlineClose onClick={onClose} />
        </CloseContainer>
        <Form>
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
            <Label>Financeiro:</Label>
            <Input
              placeholder="Digite o status financeiro do usuário"
              onChange={(e: any) => setFinancial(e.target.value)}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Status:</Label>
            <Input placeholder="Digite o status do usuário" onChange={(e: any) => setStatus(e.target.value)}></Input>
          </InputContainer>
          <Btn type="submit">Cadastrar Usuário</Btn>
        </Form>
      </Content>
    </Container>
  );
};
