/* eslint-disable no-unused-vars */
import React from 'react';

import { Container, MenuStyled } from './styles';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
};

const Home: React.FC<Props> = ({ hover, setHover }) => {
  return (
    <Container>
      <MenuStyled hover={hover} setHover={setHover} active={'DASHBOARD'} />
    </Container>
  );
};

export default Home;
