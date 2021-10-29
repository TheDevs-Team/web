import styled from 'styled-components';
import { Menu, LoadingPage, Button, Toggle } from '~/components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #202024;
  display: flex;
`;
export const LoadingPageStyled = styled(LoadingPage)``;

export const Main = styled.main`
  width: 95%;
  height: 95%;
  background: none;
  padding: 20px 40px;
  overflow-y: scroll;
`;

export const MenuStyled = styled(Menu)``;

export const ToggleStyled = styled(Toggle)``;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 90%;
  background: #2b2b2c;
  margin: 0 auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const OptionLine = styled.div`
  width: 90%;
  height: 50px;
  border-bottom: 1px solid #f1f1f1;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleOption = styled.h4`
  font-size: 14px;
  color: #f1f1f1;
  font-weight: normal;
`;

export const TitlePage = styled.h2`
  font-size: 21px;
  color: #f1f1f1;
  font-weight: bold;
`;

export const ButtonStyled = styled(Button)``;
