import styled from 'styled-components';
import { RiDashboardLine, FiLogOut, FiUsers, FiSend, RiUserSettingsLine, BiBook } from '~/utils';
import { colors } from '~/theme';
import { ifStyle } from '@platformbuilders/helpers';

const active = ifStyle('active');
const hover = ifStyle('hover');

type PropsMenu = {
  active?: boolean;
  hover?: boolean;
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #222222;
`;

export const Menu = styled.aside`
  width: 20vw;
  height: 100%;
  background: #2b2b2c;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoContent = styled.div`
  width: 100%;
  height: 10vh;
  background: yellow;
  margin: 20px 0;
`;

export const MenuItem = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const DashboardIcon = styled(RiDashboardLine)<PropsMenu>`
  font-size: 1.1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;

  &:hover {
    color: ${colors.secondary.green};
  }
`;

export const LogoutIcon = styled(FiLogOut)<PropsMenu>`
  font-size: 1.1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;

  &:hover {
    color: ${colors.secondary.green};
  }
`;

export const SendIcon = styled(FiSend)<PropsMenu>`
  font-size: 1.1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;

  &:hover {
    color: ${colors.secondary.green};
  }
`;

export const UsersIcon = styled(FiUsers)<PropsMenu>`
  font-size: 1.1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;
`;

export const ProfileIcon = styled(RiUserSettingsLine)<PropsMenu>`
  font-size: 1.1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;

  &:hover {
    color: ${colors.secondary.green};
  }
`;

export const CoursesIcon = styled(BiBook)<PropsMenu>`
  font-size: 1.1rem;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  cursor: pointer;

  &:hover {
    color: ${colors.secondary.green};
  }
`;

export const MenuText = styled.a<PropsMenu>`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${active(colors.tertiary.green, hover(colors.tertiary.green, colors.primary.light))};
  margin-left: 0.8rem;
  cursor: pointer;
`;
