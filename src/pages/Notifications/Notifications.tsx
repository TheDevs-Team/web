import React from 'react';
import { If } from '~/components';
import { isAdm } from '~/services/auth';

import {
  Container,
  MenuStyled,
  Main,
  LoadingPageStyled,
  ToggleStyled,
  ItemCard,
  InfoCard,
  ToggleCard,
  TitleOption,
  DescriptionOption,
  ContentInfo,
  Content,
  ContentButton,
  ButtonAddUser,
} from './styles';

type Props = {
  setChecked: (value: boolean) => void;
  checked: boolean;
  loaded: boolean;
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
};

export const Notifications: React.FC<Props> = ({ setChecked, checked, loaded, hover, setHover }) => {
  return (
    <Container>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        <If condition={isAdm()}>
          <MenuStyled hover={hover} setHover={setHover} active={'NOTIFICATIONS'} />
          <Main>
            <InfoCard>
              <Content>
                <ContentInfo>
                  <ItemCard>
                    <TitleOption>Novos Cursos</TitleOption>
                    <DescriptionOption>
                      Tem curso novo na área? envie um Alerta para todos os alunos da plataforma para que fiquem por
                      dentro das novidades.
                    </DescriptionOption>
                  </ItemCard>
                  <ToggleCard>
                    <ToggleStyled onChange={setChecked} checked={checked} />
                  </ToggleCard>
                </ContentInfo>
                <ContentInfo>
                  <ItemCard>
                    <TitleOption>Novos Cursos</TitleOption>
                    <DescriptionOption>
                      Tem curso novo na área? envie um Alerta para todos os alunos da plataforma para que fiquem por
                      dentro das novidades.
                    </DescriptionOption>
                  </ItemCard>
                  <ToggleCard>
                    <ToggleStyled onChange={setChecked} checked={checked} />
                  </ToggleCard>
                </ContentInfo>
              </Content>
              <ContentButton>
                <ButtonAddUser>Notificar</ButtonAddUser>
              </ContentButton>
            </InfoCard>
          </Main>
        </If>
      </If>
    </Container>
  );
};

export default Notifications;
