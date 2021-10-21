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
} from './styles';

import { Recharts, If } from 'components';
import { isAdm } from '~/services/auth';

type Props = {
  hover: HoverIconsType;
  // eslint-disable-next-line no-unused-vars
  setHover: (value: HoverIconsType) => void;
  allData: AllDashboardData;
  size: number;
};

const data = [
  {
    name: 'Jan',
    alunos: 65,
  },
  {
    name: 'Fev',
    alunos: 50,
  },
  {
    name: 'Mar',
    alunos: 55,
  },
  {
    name: 'Abr',
    alunos: 60,
  },
  {
    name: 'Mai',
    alunos: 70,
  },
  {
    name: 'Jun',
    alunos: 50,
  },
  {
    name: 'Jul',
    alunos: 50,
  },
  {
    name: 'Ago',
    alunos: 63,
  },
  {
    name: 'Set',
    alunos: 73,
  },
  {
    name: 'Out',
    alunos: 65,
  },
  {
    name: 'Nov',
    alunos: 55,
  },
  {
    name: 'Dez',
    alunos: 40,
  },
];

const Home: React.FC<Props> = ({ hover, setHover, allData, size }) => {
  console.log(size);
  return (
    <Container>
      <If condition={isAdm()}>
        {size >= 950 && (
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
                <Recharts data={data} />
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
                <Recharts data={data} />
              </ChartsArea>
            </Main>
          </>
        )}
      </If>
    </Container>
  );
};

export default Home;
