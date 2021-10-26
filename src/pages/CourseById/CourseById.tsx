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
  CreateCard,
} from './styles';

import moment from 'moment';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  size: number;
  loaded: boolean;
  course: CourseType;
  tab: string;
  setTab: (tab: string) => void;
};

const CourseById: React.FC<Props> = ({ hover, setHover, size, loaded, course, tab, setTab }) => {
  return (
    <Container>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        <If condition={isAdm()}>
          {size >= 950 && (
            <>
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
                <If condition={tab === 'students'}> </If>
              </Main>
            </>
          )}
        </If>
        <If condition={!isAdm()}>
          {size >= 950 && (
            <>
              <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
              <Main></Main>
            </>
          )}
        </If>
      </If>
    </Container>
  );
};

export default CourseById;
