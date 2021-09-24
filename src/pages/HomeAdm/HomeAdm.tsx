import React from 'react';
import GlobalStyles from '../../styles/global';
import { Header, Table } from '~/components';
import { Container, Main, UserField, Users } from './styles';

export const HomeAdm: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <UserField>
            <Users>
              <Table />
            </Users>
          </UserField>
        </Main>
      </Container>
    </>
  );
};
