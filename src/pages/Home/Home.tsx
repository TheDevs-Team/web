/* eslint-disable no-unused-vars */
import React from 'react';

import {
  Container,
  MenuStyled,
  Header,
  Main,
  TitlePage,
  Description,
  InfoCard,
  ItemCard,
  ContentItemCard,
  ItemTitle,
  ContentTextCard,
  ItemQuantity,
  BackgroudIcon,
  ChartsArea,
  UserIcon,
  PendingsIcon,
  CoursesIcon,
  MaterialsIcon,
  CoursesContainer,
  Text,
  CourseCardStyled,
  LoadingPageStyled,
} from './styles';

import { Recharts, If } from 'components';
import { isAdm } from '~/services/auth';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  allData: AllDashboardData;
  size: number;
  user: UserType;
  loaded: boolean;
};

const Home: React.FC<Props> = ({ hover, setHover, allData, size, user, loaded }) => {
  return (
    <Container>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        <If condition={isAdm()}>
          {size >= 900 && (
            <>
              <MenuStyled hover={hover} setHover={setHover} active={'DASHBOARD'} />
              <Main>
                <Header>
                  <TitlePage>Dashboard</TitlePage>
                  <Description>Fique por dentro de tudo que acontece.</Description>
                </Header>
                <InfoCard>
                  <ItemCard>
                    <ContentItemCard>
                      <BackgroudIcon>
                        <UserIcon />
                      </BackgroudIcon>
                    </ContentItemCard>
                    <ContentTextCard>
                      <ItemTitle>Usuários</ItemTitle>
                      <ItemQuantity>{allData.users}</ItemQuantity>
                    </ContentTextCard>
                  </ItemCard>
                  <ItemCard>
                    <ContentItemCard>
                      <BackgroudIcon>
                        <PendingsIcon />
                      </BackgroudIcon>
                    </ContentItemCard>
                    <ContentTextCard>
                      <ItemTitle>Pendentes</ItemTitle>
                      <ItemQuantity>{allData.pendings}</ItemQuantity>
                    </ContentTextCard>
                  </ItemCard>
                  <ItemCard>
                    <ContentItemCard>
                      <BackgroudIcon>
                        <CoursesIcon />
                      </BackgroudIcon>
                    </ContentItemCard>
                    <ContentTextCard>
                      <ItemTitle>Cursos</ItemTitle>
                      <ItemQuantity>{allData.courses}</ItemQuantity>
                    </ContentTextCard>
                  </ItemCard>
                  <ItemCard>
                    <ContentItemCard>
                      <BackgroudIcon>
                        <MaterialsIcon />
                      </BackgroudIcon>
                    </ContentItemCard>
                    <ContentTextCard>
                      <ItemTitle>Materiais</ItemTitle>
                      <ItemQuantity>{allData.materials}</ItemQuantity>
                    </ContentTextCard>
                  </ItemCard>
                </InfoCard>

                <ChartsArea>
                  <Recharts data={allData.dataGraphics} />
                </ChartsArea>
              </Main>
            </>
          )}
        </If>
        <If condition={!isAdm()}>
          {size >= 950 && (
            <>
              <MenuStyled hover={hover} setHover={setHover} active={'DASHBOARD'} />
              <Main>
                <Header>
                  <TitlePage>Olá, {user.name}</TitlePage>
                  <Description> Bem vindo a sua plataforma de estudos.</Description>
                </Header>
                <Text>Novos Cursos</Text>
                <Description>Para mais informações sobre cursos entre em contato com a instituição.</Description>
                <CoursesContainer>
                  {allData?.newCourses?.map((course: CourseType, idx) => (
                    <CourseCardStyled key={idx} name={course.name} description={course.description} />
                  ))}
                </CoursesContainer>
              </Main>
            </>
          )}
        </If>
      </If>
    </Container>
  );
};

export default Home;
