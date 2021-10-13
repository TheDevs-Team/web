import React from 'react';
import GlobalStyles from '../../styles/global';
import { Container, Main, MaterialField, Materials } from './styles';
import { Header } from '~/components';

const Course: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <MaterialField>
            <Materials></Materials>
          </MaterialField>
        </Main>
      </Container>
    </>
  );
};

export default Course;
