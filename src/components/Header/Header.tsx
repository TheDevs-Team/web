import React from 'react';

import { Avatar, Container, Logo, Logout, Menu, Button, Ul, Li, Home, Courses, Materials, Users } from './styles';
import { logout } from '~/utils';

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <span>G2K</span>
      </Logo>
      <Menu>
        <Ul>
          <Li>
            <Home title="Resumo" />
          </Li>
          <Li>
            <Courses title="Cursos" />
          </Li>
          <Li>
            <Materials title="Materiais" />
          </Li>
          <Li>
            <Users title="Usuarios" />
          </Li>
          <Li>
            <Avatar title="Perfil" />
          </Li>
          <Li>
            <Button onClick={logout}>
              <Logout title="Sair" />
            </Button>
          </Li>
        </Ul>
      </Menu>
    </Container>
  );
};
