import React from 'react';

import { Avatar, Container, Logo, Logout, Menu, Button } from './styles';
import { logout } from '~/utils';
export const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <span>G2K</span>
      </Logo>
      <Menu>
        <Avatar title="Perfil" />
        <Button onClick={logout}>
          <Logout title="Sair" />
        </Button>
      </Menu>
    </Container>
  );
};
