import React from 'react';
import { If } from '~/components';
import { isAdm } from '~/services/auth';

import {
  Container,
  LoadingPageStyled,
  MenuStyled,
  Main,
  UsersCardStyled,
  TitleSection,
  ContentUsers,
  Header,
  SearchInput,
  ButtonAddUser,
  SearchContent,
  SearchIcon,
} from './styles';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  size: number;
  loaded: boolean;
  users: UserType[];
};

export const User: React.FC<Props> = ({ hover, setHover, size, loaded, users }) => (
  <Container>
    <If condition={!loaded}>
      <LoadingPageStyled />
    </If>
    <If condition={loaded}>
      <If condition={isAdm()}>
        {size >= 950 && (
          <>
            <MenuStyled hover={hover} setHover={setHover} active={'USERS'} />
            <Main>
              <Header>
                <SearchContent>
                  <SearchIcon />
                  <SearchInput placeholder="Buscar usuários" />
                </SearchContent>
                <ButtonAddUser onClick={() => {}}>Novo Usuário</ButtonAddUser>
              </Header>
              <ContentUsers>
                <TitleSection>Administradores</TitleSection>
                <UsersCardStyled name="Gustavo Henrique Evaristo" />
                <UsersCardStyled name="Gustavo Henrique Evaristo" />
                <UsersCardStyled name="Gustavo Henrique Evaristo" />
              </ContentUsers>
              <ContentUsers>
                <TitleSection>Usuários</TitleSection>
                {users.map((user: UserType, idx: number) => (
                  <UsersCardStyled key={idx} name={user.name} />
                ))}
              </ContentUsers>
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
