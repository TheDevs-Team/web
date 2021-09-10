/* eslint-disable @typescript-eslint/no-empty-function */
/*  eslint-disable @typescript-eslint/no-explicit-any */
import api from '../../services/api';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Content, CloseContainer, Form, InputContainer, Label, Input, Btn } from './styles';

type Props = {
  onClose: () => void;
};

export const Modal: React.FC<Props> = ({ onClose = () => {} }) => {
  // State dos campos do form
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  // Guardando valores do form
  const state: any = {
    name,
    description,
  };

  // Função para enviar form para o backend
  const handleFormSubmit = async (e: any, state: any) => {
    e.preventDefault();

    const response = await api.post('course/create', state);
    console.log(response);

    if (response) {
      window.location.reload();
    }
  };

  return (
    <Container>
      <Content>
        <CloseContainer>
          <AiOutlineClose onClick={onClose} />
        </CloseContainer>
        <Form onSubmit={(e) => handleFormSubmit(e, state)}>
          <InputContainer>
            <Label>Curso:</Label>
            <Input placeholder="Digite o nome do curso" onChange={(e: any) => setName(e.target.value)}></Input>
          </InputContainer>
          <InputContainer>
            <Label>Descrição:</Label>
            <Input
              placeholder="Digite a descrição do curso"
              onChange={(e: any) => setDescription(e.target.value)}
            ></Input>
          </InputContainer>
          <Btn type="submit">Cadastrar Curso</Btn>
        </Form>
      </Content>
    </Container>
  );
};
