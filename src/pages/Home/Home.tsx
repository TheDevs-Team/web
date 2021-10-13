import React from 'react';

import { Container, Menu, MenuItem, LogoContent } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Menu>
        <LogoContent />
        <MenuItem />
      </Menu>
    </Container>
  );
};

export default Home;
