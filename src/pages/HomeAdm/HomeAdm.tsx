import React from 'react';
import GlobalStyles from '../../styles/global';
import { Header, Table } from '~/components';
import { Container, Main, RightSide, LeftSide, Users } from './styles';

export const HomeAdm: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <LeftSide>
            <Users>
              <Table />
            </Users>
          </LeftSide>
          <RightSide></RightSide>
        </Main>
      </Container>
    </>
  );
};
