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
  UserIcon,
} from './styles';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
};

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
              <ItemTitle>Usuários Cadastrados</ItemTitle>
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
              <ItemTitle>Cursos Disponíveis</ItemTitle>
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
              <ItemTitle>Materiais Disponíveis</ItemTitle>
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
              <ItemTitle>Usuários Cadastrados</ItemTitle>
              <ItemQuantity>124</ItemQuantity>
            </ContentTextCard>
          </ItemCard>
        </InfoCard>
      </Main>
    </Container>
  );
};

export default Home;
