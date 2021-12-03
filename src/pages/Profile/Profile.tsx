/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { If, Menu } from '~/components';
import { Container, Main, Btn, Form, Span, Input, Alert, LoadingPageStyled } from './styles';

type Props = {
  submitForm: (state: any) => void;
  loaded: boolean;
  profile: Partial<UserType>;
  handleState: (e: any) => void;
};

const Profile: React.FC<Props> = ({ submitForm, loaded, profile, handleState }) => {
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
                name="name"
                value={profile.name}
                onChange={handleState}
              />
              <Input
                id="phone"
                label="Telefone"
                variant="filled"
                color={'success'}
                helperText={'Ex: 11963851702'}
                name="phone"
                value={profile.phone}
                onChange={handleState}
              />
              <Input
                id="password"
                label="Senha"
                type="password"
                variant="filled"
                color={'success'}
                helperText={'Dica: Utilize senha com caracteres especiais como @#$&*'}
                name="password"
                onChange={handleState}
              />
              <Input
                id="password-confirm"
                label="Confirmar Senha"
                type="password"
                variant="filled"
                color={'success'}
                name="confirm_password"
                onChange={handleState}
              />
              <Btn type="button" onClick={() => submitForm(profile)}>
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
