import styled from 'styled-components';
import { Menu, LoadingPage, CourseCard, Button, RemoveCourseModal } from '~/components';
import { colors } from '~/theme';
import { FiUsers, MdPendingActions, MdOutlineLibraryBooks, MdOutlineSchool, BiSearch } from '~/utils';
import { ifStyle } from '@platformbuilders/helpers';

const userCourses = ifStyle('userCourses');

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #202024;
  display: flex;
`;

export const ButtonAddCourse = styled(Button)`
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
  background: none;
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
  height: 18vh;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
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

export const CoursesContainer = styled.section<CourseCardType>`
  width: 100%;
  display: flex;
  justify-content: ${userCourses('flex-start', 'space-evenly')};
  margin: ${userCourses('25px 0 40px', '25px 0 0 0')};
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const CourseCardStyled = styled(CourseCard)<CourseCardType>`
  margin: ${userCourses('10px')};
`;

export const TitlePage = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${colors.primary.white};
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.primary.light};
  margin-bottom: -10px;
`;

export const HeaderSearch = styled.header`
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

export const RemoveCourse = styled(RemoveCourseModal)``;
