import React from 'react';
import { Header, Table } from '~/components';
import { Container, Main, UserField, Users } from './styles';

type Props = {
  users: UserType[];
};

export const HomeAdm: React.FC<Props> = ({ users }) => {
  return (
    <Container>
      <Header />
      {/* <Main>
        <UserField>
          <Users>
            <Table userTable users={users} />
          </Users>
        </UserField>
      </Main> */}
    </Container>
  );
};
