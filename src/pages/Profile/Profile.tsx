/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { If, Menu } from '~/components';
import { Container, Main, Btn, Form, Span, Input, Alert, LoadingPageStyled } from './styles';

type Props = {
  submitForm: (state: any) => void;
  loaded: boolean;
};

const Profile: React.FC<Props> = ({ submitForm, loaded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const state: FormValuesUpdateType = {
    name,
    email,
    phone,
    password,
    confirm_password,
  };

  return (
    <>
      <Container>
        <If condition={!loaded}>
          <LoadingPageStyled />
        </If>
        <If condition={loaded}>
          <Menu hover={'PROFILE'} setHover={() => {}} active="PROFILE" />
          <Main>
            <Form>
              <Span>Editar Dados Básicos</Span>
              <Alert>OBS: Preencha todos os campos!</Alert>
              <Input
                id="name"
                label="Nome"
                variant="filled"
                color={'success'}
                helperText={'Ex: Eduardo Alves Zuppo'}
                onChange={(e: any) => setName(e.target.value)}
              />
              <Input
                id="email"
                label="Email"
                variant="filled"
                color={'success'}
                helperText={'Ex: user@email.com'}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                id="phone"
                label="Telefone"
                variant="filled"
                color={'success'}
                helperText={'Ex: 11963851702'}
                onChange={(e: any) => setPhone(e.target.value)}
              />
              <Input
                id="password"
                label="Senha"
                type="password"
                variant="filled"
                color={'success'}
                helperText={'Dica: Utilize senha com caracteres especiais como @#$&*'}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <Input
                id="password-confirm"
                label="Confirmar Senha"
                type="password"
                variant="filled"
                color={'success'}
                onChange={(e: any) => setConfirmPassword(e.target.value)}
              />
              <Btn type="button" onClick={() => submitForm(state)}>
                Salvar Alterações
              </Btn>
            </Form>
          </Main>
        </If>
      </Container>
    </>
  );
};

export default Profile;
