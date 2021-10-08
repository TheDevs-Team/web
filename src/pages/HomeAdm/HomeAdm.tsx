import React from 'react';
import { Header, Table } from '~/components';
import { Container, Main, UserField, Users, ContentAddUser, ButtonAddUser } from './styles';

type Props = {
  users: UserType[];
};

export const HomeAdm: React.FC<Props> = ({ users }) => {
  return (
    <Container>
      <Header />
      <Main>
        <ContentAddUser>
          <ButtonAddUser>Novo Usuário</ButtonAddUser>
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
