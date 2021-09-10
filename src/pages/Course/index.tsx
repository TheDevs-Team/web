import React, { useState, useEffect } from 'react';
import GlobalStyles from '../../styles/global';
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
import { Modal, CourseCard } from '../../components';
import api from '~/services/api';

export const Course: React.FC = () => {
  // Estado do modal para abrir e fechar
  const [modal, setModal] = useState(false);

  //Declarando state
  const [courses, setCourses] = useState<CourseType[]>([]);

  // Pegando dados do endpoint
  useEffect(() => {
    api.get('course/list').then(({ data }) => {
      setCourses(data);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      {modal && <Modal onClose={() => setModal(false)} />}
      <Container>
        <Content>
          <ContentTitle>
            <Title>Cursos Disponiveis</Title>
            <SubTitle>G2K</SubTitle>
          </ContentTitle>
          <ContentButton>
            <OpacityButton onClick={() => setModal(true)}>Cadastrar Curso</OpacityButton>
          </ContentButton>
        </Content>
      </Container>
      <ListCourses>
        <ContentList>
          {courses.map((item, idx) => (
            <CourseCard name={item.name} description={item.description} key={idx} />
          ))}
        </ContentList>
      </ListCourses>
    </>
  );
};
