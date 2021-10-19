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
    alunos: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Fev',
    alunos: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    alunos: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Abr',
    alunos: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Mai',
    alunos: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    alunos: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    alunos: 1890,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Ago',
    alunos: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Set',
    alunos: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Out',
    alunos: 2100,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    alunos: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dez',
    alunos: 3490,
    pv: 4300,
    amt: 2100,
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
