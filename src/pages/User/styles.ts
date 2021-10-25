import styled from 'styled-components';
import { Menu, LoadingPage, UsersCard } from '~/components';
import { colors } from '~/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #202024;
  display: flex;
`;

export const MenuStyled = styled(Menu)``;

export const LoadingPageStyled = styled(LoadingPage)``;

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  overflow: auto;
`;

export const ContentUsers = styled.div`
  width: 60%;
  margin: 0 auto;
  overflow: auto;
`;

export const UsersCardStyled = styled(UsersCard)`
  margin: 10px 0;
`;

export const TitleSection = styled.h3`
  text-align: left;
  font-size: 26px;
  font-weight: 400;
  color: ${colors.primary.white};
  margin: 50px 0 40px;
`;
