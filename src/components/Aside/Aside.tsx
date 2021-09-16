import React from 'react';

import { Container, Ul, Li, Home, Courses, Materials, Users, Menu } from './styles';

export const Aside: React.FC = () => {
  return (
    <Container>
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
        </Ul>
      </Menu>
    </Container>
  );
};
