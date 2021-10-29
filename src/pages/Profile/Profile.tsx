/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Menu } from '~/components';

import { Container, Main, Btn, Form, Span, Input } from './styles';

export const Profile: React.FC = () => {
  return (
    <>
      <Container>
        <Menu hover={'PROFILE'} setHover={() => {}} active="PROFILE" />
        <Main>
          <Form>
            <Span>Editar Dados Básicos</Span>
            <Input id="name" label="Nome" variant="filled" color={'success'} helperText={'Ex: Eduardo Alves Zuppo'} />
            <Input id="email" label="Email" variant="filled" color={'success'} helperText={'Ex: user@email.com'} />
            <Input id="phone" label="Telefone" variant="filled" color={'success'} helperText={'Ex: 11963851702'} />
            <Input
              id="password"
              label="Senha"
              type="password"
              variant="filled"
              color={'success'}
              helperText={'Dica: Utilize senha com caracteres especiais como @#$&*'}
            />
            <Input id="password-confirm" label="Confirmar Senha" type="password" variant="filled" color={'success'} />
            <Btn type="submit">Salvar Alterações</Btn>
          </Form>
        </Main>
      </Container>
    </>
  );
};

export default Profile;
