/* eslint-disable no-unused-vars */
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
} from './styles';

import { Recharts } from 'components';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
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

const Home: React.FC<Props> = ({ hover, setHover }) => {
  return (
    <Container>
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
              <ItemQuantity>325</ItemQuantity>
            </ContentTextCard>
          </ItemCard>
          <ItemCard>
            <ContentItemCard>
              <BackgroudIcon>
                <UserIcon />
              </BackgroudIcon>
            </ContentItemCard>
            <ContentTextCard>
              <ItemTitle>Cursos</ItemTitle>
              <ItemQuantity>8</ItemQuantity>
            </ContentTextCard>
          </ItemCard>
          <ItemCard>
            <ContentItemCard>
              <BackgroudIcon>
                <UserIcon />
              </BackgroudIcon>
            </ContentItemCard>
            <ContentTextCard>
              <ItemTitle>Materiais</ItemTitle>
              <ItemQuantity>15</ItemQuantity>
            </ContentTextCard>
          </ItemCard>
          <ItemCard>
            <ContentItemCard>
              <BackgroudIcon>
                <UserIcon />
              </BackgroudIcon>
            </ContentItemCard>
            <ContentTextCard>
              <ItemTitle>Pendentes</ItemTitle>
              <ItemQuantity>124</ItemQuantity>
            </ContentTextCard>
          </ItemCard>
        </InfoCard>

        <ChartsArea>
          <Recharts data={data} />
        </ChartsArea>
      </Main>
    </Container>
  );
};

export default Home;
