import styled from 'styled-components';
import { Menu, LoadingPage, UsersCard } from '~/components';
import { colors } from '~/theme';
import { FiUsers, MdPendingActions, MdOutlineLibraryBooks, MdOutlineSchool } from '~/utils';
import { ifStyle } from '@platformbuilders/helpers';

const tabVisible = ifStyle('tabVisible');

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #202024;
  display: flex;
`;

export const MenuStyled = styled(Menu)``;

export const LoadingPageStyled = styled(LoadingPage)``;

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
  padding: 20px 40px;
  overflow-y: scroll;
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
  height: 35vh;
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  flex-direction: column;
`;

export const ChartsArea = styled.section`
  background: #2b2b2c;
  width: 100%;
  height: 60vh;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  overflow: hidden;
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
  cursor: default;
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
  color: #67f7bd;
`;

export const BackgroudIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #353535;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const UserIcon = styled(FiUsers)<MenuStyleType>`
  font-size: 1.5rem;
  color: #67f7bd;
  cursor: default;
`;

export const PendingsIcon = styled(MdPendingActions)<MenuStyleType>`
  font-size: 1.5rem;
  color: #67f7bd;
  cursor: default;
`;

export const CoursesIcon = styled(MdOutlineSchool)<MenuStyleType>`
  font-size: 1.5rem;
  color: #67f7bd;
  cursor: default;
`;

export const MaterialsIcon = styled(MdOutlineLibraryBooks)<MenuStyleType>`
  font-size: 1.5rem;
  color: #67f7bd;
  cursor: default;
`;

export const TitlePage = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${colors.primary.white};
`;

export const DataCourse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameCourse = styled.span`
  padding: 20px 0 0 20px;
  font-size: 45px;
  color: ${colors.primary.white};
  font-weight: 500;
`;

export const YearCourse = styled.span`
  padding: 0 0 20px 20px;
  font-size: 20px;
  color: #d0cdcd;
`;

export const HeadInfo = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerActivities = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CreateCard = styled.div`
  width: 20%;
  margin: 30px 20px 0 0;
  padding: 20px;
  border-radius: 15px;
  background: #2b2b2c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  span:first-child {
    color: ${colors.primary.white};
  }

  p {
    color: #c6c6c6;
    font-size: 15px;
    padding: 20px 0;
  }

  button {
    width: 150px;
  }
`;

export const Materials = styled.button<TabVisibleType>`
  border: none;
  height: 100%;
  width: 100px;

  background: #2b2b2c;
  color: ${tabVisible(colors.tertiary.green, 'white')};
  border-bottom: 2px solid ${tabVisible(colors.tertiary.green, 'none')};
  cursor: pointer;

  &:hover {
    background: ${tabVisible('#3d3d3d', '#3d3d3d')};
  }
`;

export const Students = styled.button<TabVisibleType>`
  border: none;
  height: 100%;
  padding: 0 12px;

  background: #2b2b2c;
  color: ${tabVisible(colors.tertiary.green, 'white')};
  border-bottom: 2px solid ${tabVisible(colors.tertiary.green, 'none')};
  cursor: pointer;

  &:hover {
    background: ${tabVisible('#3d3d3d', '#3d3d3d')};
  }
`;

export const UsersContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  span {
    color: white;
    font-size: 20px;
    padding: 40px 0 40px 0;
  }
`;

export const Users = styled(UsersCard)`
  width: 60%;
`;
