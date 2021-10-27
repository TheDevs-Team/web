import styled from 'styled-components';
import { Menu, LoadingPage, Button, Toggle } from '~/components';
import { colors } from '~/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #202024;
  display: flex;
`;
export const LoadingPageStyled = styled(LoadingPage)``;

export const TitlePage = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${colors.primary.white};
`;

export const Main = styled.main`
  width: 95%;
  height: 95%;
  background: none;
  padding: 20px 40px;
  overflow-y: scroll;
`;

export const MenuStyled = styled(Menu)``;

export const ToggleStyled = styled(Toggle)``;

export const InfoCard = styled.section`
  width: 70%;
  height: 90%;
  background: #2b2b2c;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ContentButton = styled.div`
  width: 80%;
  height: 20%;
  margin: 0 auto;
  display: flex;
`;

export const ContentInfo = styled.div`
  width: 100%;
  display: flex;
`;

export const ItemCard = styled.div`
  width: 45%;
  height: 15vh;
`;

export const ToggleCard = styled.div`
  width: 45%;
  height: 15vh;
  display: flex;
  justify-content: center;
`;

export const TitleOption = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

export const DescriptionOption = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #cecece;
`;

export const ButtonAddUser = styled(Button)`
  width: 20%;
  height: 50%;
  border: none;
  background: none;
  border: 1px solid #38c58d;
  color: #38c58d;

  &:hover {
    background: #38c58d;
    color: #2b2b2c;
  }
`;
