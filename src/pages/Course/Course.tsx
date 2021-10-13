import React from 'react';
import GlobalStyles from '../../styles/global';
import { Container, Main, CourseField, Courses } from './styles';
import { Header } from '~/components';

const Course: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <CourseField>
            <Courses></Courses>
          </CourseField>
        </Main>
      </Container>
    </>
  );
};

export default Course;
