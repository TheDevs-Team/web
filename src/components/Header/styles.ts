import styled from 'styled-components';

import { IoIosContact } from 'react-icons/io';
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { colors } from '~/theme';
import { HiOutlineDocumentDuplicate, HiOutlineDocumentText } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';

export const Container = styled.div`
  width: 100%;
  height: 6%;
  background: ${colors.primary.main};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 70px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 25px;

  span {
    font-size: 25px;
    font-weight: 500;

    color: ${colors.primary.white};
  }
`;

export const Menu = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Avatar = styled(IoIosContact)`
  color: ${colors.primary.white};
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #219150;
  }
`;

export const Logout = styled(FiLogOut)`
  color: ${colors.primary.white};
  font-size: 24px;
  cursor: pointer;
`;

export const Button = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ul = styled.ul`
  width: 100%;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Li = styled.li`
  padding: 0 22px;
  overflow: hidden;
`;

export const Home = styled(AiOutlineHome)`
  color: ${colors.primary.white};
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #219150;
  }
`;

export const Courses = styled(HiOutlineDocumentDuplicate)`
  color: ${colors.primary.white};
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #219150;
  }
`;

export const Materials = styled(HiOutlineDocumentText)`
  color: ${colors.primary.white};
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #219150;
  }
`;

export const Users = styled(FiUsers)`
  color: ${colors.primary.white};
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #219150;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 20px;
  color: ${colors.primary.main};
  cursor: pointer;
`;
