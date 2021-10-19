import styled from 'styled-components';
import { RiDashboardLine, FiLogOut, FiUsers, FiSend, RiUserSettingsLine, BiBook } from '~/utils';
import { colors } from '~/theme';
import { ifStyle } from '@platformbuilders/helpers';

const active = ifStyle('active');
const hover = ifStyle('hover');

export const Container = styled.aside`
  width: 15vw;
  height: 100%;
  background: #2b2b2c;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoContent = styled.div`
  width: 100%;
  height: 10vh;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.span`
  font-size: 35px;
  font-weight: 500;

  color: ${colors.primary.white};
  cursor: default;
`;

export const MenuItem = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const DashboardIcon = styled(RiDashboardLine)<MenuStyleType>`
  font-size: 1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;
`;

export const LogoutIcon = styled(FiLogOut)<MenuStyleType>`
  font-size: 1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;
`;

export const SendIcon = styled(FiSend)<MenuStyleType>`
  font-size: 1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;
`;

export const UsersIcon = styled(FiUsers)<MenuStyleType>`
  font-size: 1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;
`;

export const ProfileIcon = styled(RiUserSettingsLine)<MenuStyleType>`
  font-size: 1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;
`;

export const CoursesIcon = styled(BiBook)<MenuStyleType>`
  font-size: 1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;
`;

export const MenuText = styled.a<MenuStyleType>`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  margin-left: 0.8rem;
  cursor: pointer;
  width: 100;
`;
