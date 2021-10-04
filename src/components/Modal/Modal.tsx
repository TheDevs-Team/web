/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/*  eslint-disable @typescript-eslint/no-explicit-any */
import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { UserStore } from '~/store';
import { If } from '~/components';
import {
  Container,
  Content,
  CloseContainer,
  Form,
  InputContainer,
  Label,
  Input,
  Btn,
  Select,
  Option,
  Remove,
  TitleRemove,
  OptionRemove,
  RemoveBtn,
} from './styles';

type Props = {
  onClose: () => void;
  user?: UserStore;
  onRegister?: boolean;
  onEdit?: boolean;
  onRemove?: boolean;
};

const Modal: React.FC<Props> = ({ onClose = () => {}, user, onRegister, onEdit, onRemove }) => {
  // State dos campos do form Modal Cadastro de Usuario
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [email, setEmail] = useState('');
  const [financial, setFinancial] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');

  // State dos campos do form Modal Editar de Usuario
  // Guardando valores do form
  const state = {
    name,
    document,
    email,
    financial_status: financial,
    phone,
    type,
  };

  return (
    <Container>
      <Content>
        <CloseContainer>
          <AiOutlineClose onClick={onClose} />
        </CloseContainer>
        <Form>
          <If condition={onRegister === true}>
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
              <Label>Telefone:</Label>
              <Input placeholder="11 99999-9999" onChange={(e: any) => setPhone(e.target.value)}></Input>
            </InputContainer>
            <InputContainer>
              <Label>Tipo:</Label>
              <Select placeholder="Digite o Tipo do usuário" onChange={(e: any) => setType(e.target.value)}>
                <Option>Escolha o Tipo Do usuario</Option>
                <Option>User</Option>
                <Option>Professor</Option>
                <Option>Adm</Option>
              </Select>
            </InputContainer>
            <Btn type="submit">Cadastrar Usuário</Btn>
          </If>
          <If condition={onEdit === true}>
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
            <Btn type="submit">Atualizar Dados</Btn>
          </If>
          <If condition={onRemove === true}>
            <Remove>
              <TitleRemove>Deseja remover esse Usuário?</TitleRemove>
              <OptionRemove>
                <RemoveBtn>Sim</RemoveBtn>
                <RemoveBtn>Nao</RemoveBtn>
              </OptionRemove>
            </Remove>
          </If>
        </Form>
      </Content>
    </Container>
  );
};

export default inject('user')(observer(Modal));
