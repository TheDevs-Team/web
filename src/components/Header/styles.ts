import styled from 'styled-components';

import { IoIosContact } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { colors } from '~/theme';

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
  width: 150px;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Avatar = styled(IoIosContact)`
  color: ${colors.primary.white};
  font-size: 30px;
  padding: 0 15px;
  cursor: pointer;
`;

export const Logout = styled(FiLogOut)`
  color: ${colors.primary.white};
  font-size: 25px;
  padding: 0 15px;
  cursor: pointer;
`;
