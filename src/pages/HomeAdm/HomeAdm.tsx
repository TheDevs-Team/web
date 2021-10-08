import React from 'react';
import { Header, Table, Modal } from '~/components';
import { Container, Main, UserField, Users, ContentAddUser, ButtonAddUser } from './styles';

type Props = {
  users: UserType[];
  setCreateUser: () => void;
  createUser: boolean;
};

export const HomeAdm: React.FC<Props> = ({ users, setCreateUser, createUser }) => {
  return (
    <Container>
      <Header />
      <Main>
        {createUser && <Modal onClose={setCreateUser} onRegister />}
        <ContentAddUser>
          <ButtonAddUser onClick={setCreateUser}>Novo Usuário</ButtonAddUser>
        </ContentAddUser>
        <UserField>
          <Users>
            <Table userTable users={users} />
          </Users>
        </UserField>
      </Main>
    </Container>
  );
};
