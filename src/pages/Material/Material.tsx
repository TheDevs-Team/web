import React from 'react';
import GlobalStyles from '../../styles/global';
import { Container, Main, MaterialField, Materials } from './styles';
import { Header, Table } from '~/components';

const Course: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <MaterialField>
            <Materials>
              <Table materialTable />
            </Materials>
          </MaterialField>
        </Main>
      </Container>
    </>
  );
};

export default Course;
