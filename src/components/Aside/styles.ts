import styled from 'styled-components';

import { AiOutlineHome } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineDocumentText, HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { colors } from '~/theme';

export const Container = styled.div`
  width: 55px;
  height: 93%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const Menu = styled.div`
  width: 100%;
  height: 40%;

  background: ${colors.primary.main};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0 20px 20px 0;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Li = styled.li`
  padding: 20px 0;
  overflow: hidden;
`;

export const Home = styled(AiOutlineHome)`
  color: ${colors.primary.white};
  font-size: 25px;
  cursor: pointer;
`;

export const Courses = styled(HiOutlineDocumentDuplicate)`
  color: ${colors.primary.white};
  font-size: 25px;
  cursor: pointer;
`;

export const Materials = styled(HiOutlineDocumentText)`
  color: ${colors.primary.white};
  font-size: 25px;
  cursor: pointer;
`;

export const Users = styled(FiUsers)`
  color: ${colors.primary.white};
  font-size: 25px;
  cursor: pointer;
`;
