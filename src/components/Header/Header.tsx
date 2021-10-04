import React from 'react';

import { Avatar, Container, Logo, Logout, Menu, Button, Ul, Li, Courses, Materials, Users } from './styles';
import { logout } from '~/utils';
import { useHistory } from 'react-router';

export const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Logo>
        <span>G2K</span>
      </Logo>
      <Menu>
        <Ul>
          <Li>
            <Courses title="Cursos" onClick={() => history.push('/cursos')} />
          </Li>
          <Li>
            <Materials title="Materiais" onClick={() => history.push('/materiais')} />
          </Li>
          <Li>
            <Users title="Usuarios" onClick={() => history.push('/')} />
          </Li>
          <Li>
            <Avatar title="Perfil" onClick={() => history.push('/perfil')} />
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
