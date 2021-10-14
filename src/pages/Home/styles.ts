import styled from 'styled-components';
import { Menu } from '~/components';
import { colors } from '~/theme';
import { FiUser } from '~/utils';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #202024;
  display: flex;
`;

export const MenuStyled = styled(Menu)``;

export const Header = styled.header`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.main`
  width: 95%;
  height: 95%;
  background: none;
  padding: 20px 40px;
`;

export const TitlePage = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${colors.primary.white};
`;

export const Description = styled.h4`
  font-size: 13px;
  font-weight: 300;
  color: ${colors.primary.light};
  margin-top: 0.2rem;
`;

export const InfoCard = styled.section`
  background: #2b2b2c;
  width: 100%;
  height: 18vh;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

export const ItemCard = styled.div`
  width: 15vw;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ContentItemCard = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const ContentTextCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemTitle = styled.h3`
  font-size: 12px;
  font-weight: 300;
  color: ${colors.primary.white};
`;

export const ItemQuantity = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
  color: ${colors.tertiary.green};
  color: #32b768;
`;

export const BackgroudIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #daf2e4;
  display: flex;
  align-items: center;
  justify-content: center; ;
`;

export const UserIcon = styled(FiUser)<MenuStyleType>`
  font-size: 1.5rem;
  color: #32b768;
  cursor: pointer;
`;
