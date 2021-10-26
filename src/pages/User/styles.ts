import styled from 'styled-components';
import { Menu, LoadingPage, UsersCard, Button } from '~/components';
import { colors } from '~/theme';
import { BiSearch } from '~/utils';

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

export const Header = styled.header`
  width: 60%;
  height: 10vh;
  margin: 20px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContent = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 2px solid #353535;
  border-radius: 8px;

  padding: 0 5px;
`;

export const SearchIcon = styled(BiSearch)`
  color: #cccccc;
  margin-left: 5px;
`;

export const SearchInput = styled.input`
  width: 94%;
  height: 100%;
  border: none;
  background: none;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

export const ButtonAddUser = styled(Button)`
  width: 20%;
  height: 80%;
  border: none;
  background: none;
  border: 1px solid #38c58d;
  color: #38c58d;

  &:hover {
    background: #38c58d;
    color: #2b2b2c;
  }
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
