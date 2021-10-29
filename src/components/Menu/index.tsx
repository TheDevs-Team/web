/* eslint-disable no-unused-vars */
import React from 'react';
import { MENU_ADM_OPTIONS, MENU_USER_OPTIONS, logout } from '~/utils';
import { useHistory } from 'react-router';
import { isAdm } from '~/services/auth';
import { If } from '../If';

import {
  Container,
  MenuItem,
  LogoContent,
  DashboardIcon,
  MenuText,
  LogoutIcon,
  UsersIcon,
  SendIcon,
  ProfileIcon,
  CoursesIcon,
  Logo,
} from './styles';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  active: string;
};

export const Menu: React.FC<Props> = ({ hover, setHover, active, ...rest }) => {
  const history = useHistory();

  return (
    <Container {...rest}>
      <LogoContent>
        <Logo>G2K</Logo>
      </LogoContent>
      <If condition={isAdm()}>
        {MENU_ADM_OPTIONS.map((item: MenuOptionsType, idx: number) => (
          <MenuItem key={idx} onMouseEnter={() => setHover(item.key)} onMouseLeave={() => setHover('')}>
            {item.key === 'DASHBOARD' && <DashboardIcon active={item.key === active} hover={item.key === hover} />}
            {item.key === 'USERS' && <UsersIcon active={item.key === active} hover={item.key === hover} />}
            {item.key === 'COURSES' && <CoursesIcon active={item.key === active} hover={item.key === hover} />}
            {item.key === 'NOTIFICATIONS' && <SendIcon active={item.key === active} hover={item.key === hover} />}
            {item.key === 'PROFILE' && <ProfileIcon active={item.key === active} hover={item.key === hover} />}
            {item.key === 'LOGOUT' && <LogoutIcon active={item.key === active} hover={item.key === hover} />}
            <MenuText
              active={item.key === active}
              hover={item.key === hover}
              onClick={() => (item.key === 'LOGOUT' ? logout() : history.push(item.url))}
            >
              {item.name}
            </MenuText>
          </MenuItem>
        ))}
      </If>
      <If condition={!isAdm()}>
        {MENU_USER_OPTIONS.map((item: MenuOptionsType, idx: number) => (
          <MenuItem key={idx} onMouseEnter={() => setHover(item.key)} onMouseLeave={() => setHover('')}>
            {item.key === 'DASHBOARD' && <DashboardIcon active={item.key === active} hover={item.key === hover} />}
            {item.key === 'COURSES' && <CoursesIcon active={item.key === active} hover={item.key === hover} />}
            {item.key === 'PROFILE' && <ProfileIcon active={item.key === active} hover={item.key === hover} />}
            {item.key === 'LOGOUT' && <LogoutIcon active={item.key === active} hover={item.key === hover} />}
            <MenuText
              active={item.key === active}
              hover={item.key === hover}
              onClick={() => (item.key === 'LOGOUT' ? logout() : history.push(item.url))}
            >
              {item.name}
            </MenuText>
          </MenuItem>
        ))}
      </If>
    </Container>
  );
};
