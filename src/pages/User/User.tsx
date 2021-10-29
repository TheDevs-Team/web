import React from 'react';
import { If } from '~/components';
import { isAdm } from '~/services/auth';
import { isEmpty } from 'lodash';

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
  loaded: boolean;
  users: UserType[];
  adms: UserType[];
  pendings: UserType[];
  filteredUsers: UserType[];
  filter: boolean;
  searchUsers: (query: string) => void;
  setFilter: (valui: boolean) => void;
};

export const User: React.FC<Props> = ({
  hover,
  setHover,
  loaded,
  users,
  adms,
  pendings,
  filteredUsers,
  searchUsers,
  filter,
  setFilter,
}) => (
  <Container>
    <If condition={!loaded}>
      <LoadingPageStyled />
    </If>
    <If condition={loaded}>
      <If condition={isAdm()}>
        <MenuStyled hover={hover} setHover={setHover} active={'USERS'} />
        <Main>
          <Header>
            <SearchContent>
              <SearchIcon />
              <SearchInput
                placeholder="Buscar usuários"
                onChange={({ target }) => {
                  searchUsers(target.value);
                  setFilter(!!target.value);
                }}
              />
            </SearchContent>
            <ButtonAddUser onClick={() => {}}>Novo Usuário</ButtonAddUser>
          </Header>
          <If condition={filter}>
            {console.log(filteredUsers)}
            <ContentUsers>
              {filteredUsers.map((user: UserType, idx: number) => (
                <UsersCardStyled key={idx} name={user.name} />
              ))}
            </ContentUsers>
          </If>
          <ContentUsers>
            <If condition={!filter}>
              <TitleSection>Administradores</TitleSection>
              {adms.map((adm: UserType, idx) => (
                <UsersCardStyled key={idx} name={adm.name} />
              ))}
            </If>
          </ContentUsers>
          <ContentUsers>
            <If condition={!filter}>
              <TitleSection>Usuários</TitleSection>
              {users.map((user: UserType, idx: number) => (
                <UsersCardStyled key={idx} name={user.name} />
              ))}
            </If>
          </ContentUsers>
          <If condition={!isEmpty(pendings) && !filter}>
            <ContentUsers>
              <TitleSection>Pendentes</TitleSection>
              {pendings.map((user: UserType, idx: number) => (
                <UsersCardStyled key={idx} name={user.name} />
              ))}
            </ContentUsers>
          </If>
        </Main>
      </If>
      <If condition={!isAdm()}>
        <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
        <Main></Main>
      </If>
    </If>
  </Container>
);
