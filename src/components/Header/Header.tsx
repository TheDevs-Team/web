import React from 'react';

import { Avatar, Container, Logo, Logout, Menu } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <span>G2K</span>
      </Logo>
      <Menu>
        <Avatar title="Perfil" />
        <Logout title="Sair" />
      </Menu>
    </Container>
  );
};
