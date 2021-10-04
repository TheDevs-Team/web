import styled from 'styled-components';

import { GoFile, GoPackage } from 'react-icons/go';
import { colors } from '~/theme';
import { AiOutlineClose, AiOutlineUser, AiOutlineUsergroupDelete, AiOutlinePoweroff } from 'react-icons/ai';

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

export const Avatar = styled(AiOutlineUser)`
  color: ${colors.primary.white};
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${colors.tertiary.green};
  }
`;

export const Logout = styled(AiOutlinePoweroff)`
  color: ${colors.primary.white};
  font-size: 20px;
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
  padding: 0 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Courses = styled(GoPackage)`
  color: ${colors.primary.white};
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${colors.tertiary.green};
  }
`;

export const Materials = styled(GoFile)`
  color: ${colors.primary.white};
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${colors.tertiary.green};
  }
`;

export const Users = styled(AiOutlineUsergroupDelete)`
  color: ${colors.primary.white};
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${colors.tertiary.green};
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 20px;
  color: ${colors.primary.main};
  cursor: pointer;
`;
