import React from 'react';

import { Header, Aside, Main } from '~/components';
import { Container } from './styles';

export const HomeAdm: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Aside />
    </Container>
  );
};
