/* eslint-disable no-unused-vars */
import React from 'react';
import { If, Activities, Button } from '~/components';
import { isAdm } from '~/services/auth';
import {
  Container,
  MenuStyled,
  Main,
  LoadingPageStyled,
  InfoCard,
  NameCourse,
  YearCourse,
  HeadInfo,
  DataCourse,
  Materials,
  Students,
  ContainerActivities,
  Content,
  Users,
  CreateCard,
  UsersContainer,
} from './styles';

import moment from 'moment';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  loaded: boolean;
  course: CourseType;
  tab: string;
  setTab: (tab: string) => void;
  notInCourse: UserType[];
};

const CourseById: React.FC<Props> = ({ hover, setHover, loaded, course, tab, setTab, notInCourse }) => {
  return (
    <Container>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        <If condition={isAdm()}>
          <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
          <Main>
            <InfoCard>
              <HeadInfo>
                <Materials tabVisible={tab === 'materials'} onClick={() => setTab('materials')}>
                  Materiais
                </Materials>
                <Students tabVisible={tab === 'participants'} onClick={() => setTab('participants')}>
                  Participantes
                </Students>
                <Students tabVisible={tab === 'addstudents'} onClick={() => setTab('addstudents')}>
                  Adicionar Alunos
                </Students>
              </HeadInfo>
              <DataCourse>
                <NameCourse>{course.name}</NameCourse>
                <YearCourse>{moment().format('Y')} - TURMA G2K</YearCourse>
              </DataCourse>
            </InfoCard>
            <If condition={tab === 'materials'}>
              <Content>
                <CreateCard>
                  <span>Olá, Professor!</span>
                  <p>Aqui você pode criar novos materiais pra este curso!</p>
                  <Button>Criar Material</Button>
                </CreateCard>
                <ContainerActivities>
                  <Activities />
                  <Activities />
                  <Activities /> <Activities />
                  <Activities /> <Activities />
                  <Activities />
                </ContainerActivities>
              </Content>
            </If>
            <If condition={tab === 'addstudents'}>
              <Content>
                <UsersContainer>
                  <span>Alunos Disponíveis</span>
                  {notInCourse.map((user, idx) => (
                    <Users key={idx} name={user.name} showAdd />
                  ))}
                </UsersContainer>
              </Content>
            </If>
            <If condition={tab === 'participants'}>
              <UsersContainer>
                <span>Alunos Participantes</span>
                <Users name="Eduardo" showDelete />
              </UsersContainer>
            </If>
          </Main>
        </If>
        <If condition={!isAdm()}>
          <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
          <Main>
            <InfoCard>
              <HeadInfo>
                <Materials tabVisible={tab === 'materials'} onClick={() => setTab('materials')}>
                  Materiais
                </Materials>
              </HeadInfo>
              <DataCourse>
                <NameCourse>{course.name}</NameCourse>
                <YearCourse>{moment().format('Y')} - TURMA G2K</YearCourse>
              </DataCourse>
            </InfoCard>
            <If condition={tab === 'materials'}>
              <Content>
                <CreateCard>
                  <span>Olá, Aluno!</span>
                  <p>Aqui você pode ver os materiais disponibilizados!</p>
                </CreateCard>
                <ContainerActivities>
                  <Activities />
                  <Activities />
                  <Activities /> <Activities />
                  <Activities /> <Activities />
                  <Activities />
                </ContainerActivities>
              </Content>
            </If>
          </Main>
        </If>
      </If>
    </Container>
  );
};

export default CourseById;
