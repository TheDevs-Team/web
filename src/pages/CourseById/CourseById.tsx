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
};

const CourseById: React.FC<Props> = ({ hover, setHover, loaded, course, tab, setTab }) => {
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
                <Students tabVisible={tab === 'students'} onClick={() => setTab('students')}>
                  Alunos
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
            <If condition={tab === 'students'}>
              <Content>
                <CreateCard>
                  <span>Olá, Professor!</span>
                  <p>Aqui você pode adicionar novos alunos para esse curso!</p>
                  <Button>Adicionar Aluno</Button>
                </CreateCard>
                {/* <UsersContainer>
                  <span>Alunos Participantes</span>
                  <Users name="Eduardo" />
                  <Users name="Carlos" />
                  <Users name="Fabio" />
                  <Users name="Vanessa" />
                  <Users name="Marcola" />
                  <Users name="Jonas" />
                  <Users name="Jennifer" />
                  <Users name="Rubens" />
                  <Users name="Neymar" />
                </UsersContainer> */}
              </Content>
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
