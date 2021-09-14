import React from 'react';
import {
  Container,
  Content,
  ContentTitle,
  Title,
  SubTitle,
  ContentButton,
  OpacityButton,
  ListCourses,
  ContentList,
} from './styles';

type Props = {
  name: string;
};

export const Course: React.FC<Props> = ({ name }) => (
  <main>
    <Container>
      <Content>
        <ContentTitle>
          <Title>Cursos Disponiveis para você {name}</Title>
          <SubTitle>G2K</SubTitle>
        </ContentTitle>
        <ContentButton>
          <OpacityButton>Cadastrar Curso</OpacityButton>
        </ContentButton>
      </Content>
    </Container>
    <ListCourses>
      <ContentList></ContentList>
    </ListCourses>
  </main>
);
