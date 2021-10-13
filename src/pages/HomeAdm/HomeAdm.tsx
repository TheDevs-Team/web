/* eslint-disable no-unused-vars */
import React from 'react';
import { Header, Modal, UsersTable } from '~/components';
import { Container, Main, UserField, Users, ContentAddUser, ButtonAddUser } from './styles';

type Props = {
  users: UserType[];
  setCreateUser: () => void;
  createUser: boolean;
  removeUser: boolean;
  setRemoveUser: (id?: string) => void;
};

export const HomeAdm: React.FC<Props> = ({ users, setCreateUser, createUser, removeUser, setRemoveUser }) => {
  return (
    <Container>
      <Header />
      <Main>
        {createUser && <Modal onClose={setCreateUser} />}
        {removeUser && <Modal onClose={setRemoveUser} />}

        <ContentAddUser>
          <ButtonAddUser onClick={setCreateUser}>Novo Usuário</ButtonAddUser>
        </ContentAddUser>
        <UserField>
          <Users>
            <UsersTable
              users={users}
              handleEdit={() => {}}
              handleRemove={({ target }) => {
                setRemoveUser(target.value as string);
              }}
            />
          </Users>
        </UserField>
      </Main>
    </Container>
  );
};
