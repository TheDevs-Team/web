import React from 'react';

import {
  Container,
  Menu,
  MenuItem,
  LogoContent,
  DashboardIcon,
  MenuText,
  LogoutIcon,
  UsersIcon,
  SendIcon,
  ProfileIcon,
} from './styles';

type Props = {
  hover: HoverIconsType;
  setHover: (item: HoverIconsType) => void;
};

const Home: React.FC<Props> = ({ hover, setHover }) => {
  return (
    <Container>
      <Menu>
        <LogoContent />
        <MenuItem>
          <DashboardIcon active />
          <MenuText active>Home</MenuText>
        </MenuItem>
        <MenuItem onMouseEnter={() => setHover('USERS')} onMouseLeave={() => setHover('')}>
          <UsersIcon hover={hover === 'USERS'} />
          <MenuText hover={hover === 'USERS'}>Usuarios</MenuText>
        </MenuItem>
        <MenuItem onMouseEnter={() => setHover('COURSES')} onMouseLeave={() => setHover('')}>
          <DashboardIcon hover={hover === 'COURSES'} />
          <MenuText hover={hover === 'COURSES'}>Cursos</MenuText>
        </MenuItem>
        <MenuItem onMouseEnter={() => setHover('MESSAGE')} onMouseLeave={() => setHover('')}>
          <SendIcon hover={hover === 'MESSAGE'} />
          <MenuText hover={hover === 'MESSAGE'}>Mensagens</MenuText>
        </MenuItem>
        <MenuItem onMouseEnter={() => setHover('PROFILE')} onMouseLeave={() => setHover('')}>
          <ProfileIcon hover={hover === 'PROFILE'} />
          <MenuText hover={hover === 'PROFILE'}>Perfil</MenuText>
        </MenuItem>
        <MenuItem onMouseEnter={() => setHover('LOGOUT')} onMouseLeave={() => setHover('')}>
          <LogoutIcon hover={hover === 'LOGOUT'} />
          <MenuText hover={hover === 'LOGOUT'}>Sair</MenuText>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Home;
