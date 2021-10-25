import React from 'react';
import { UsersCard, If } from '~/components';
import { isAdm } from '~/services/auth';

import { Container, LoadingPageStyled, MenuStyled, Main } from './styles';

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
              {users.map((user: UserType, idx: number) => (
                <UsersCard key={idx} />
              ))}
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
