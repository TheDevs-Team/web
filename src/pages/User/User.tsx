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
  size: number;
  loaded: boolean;
  users: UserType[];
  adms: UserType[];
  pendings: UserType[];
};

export const User: React.FC<Props> = ({ hover, setHover, size, loaded, users, adms, pendings }) => (
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
                {adms.map((adm: UserType, idx) => (
                  <UsersCardStyled key={idx} name={adm.name} />
                ))}
              </ContentUsers>
              <ContentUsers>
                <TitleSection>Usuários</TitleSection>
                {users.map((user: UserType, idx: number) => (
                  <UsersCardStyled key={idx} name={user.name} />
                ))}
              </ContentUsers>
              <If condition={!isEmpty(pendings)}>
                <ContentUsers>
                  <TitleSection>Pendentes</TitleSection>
                  {pendings.map((user: UserType, idx: number) => (
                    <UsersCardStyled key={idx} name={user.name} />
                  ))}
                </ContentUsers>
              </If>
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
