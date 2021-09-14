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
import { UserStore } from '~/store';
import { Modal, CourseCard } from '../../components';
import api from '~/services/api';

type Props = {
  user: UserStore;
};

export const Course: React.FC<Props> = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [courses, setCourses] = useState<CourseType[]>([]);

  console.log('AAAAAAAAAAAA', user.profile);
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
