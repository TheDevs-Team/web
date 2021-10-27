import moment from 'moment';
import React from 'react';

import { Container, IconMaterial, Title, Date, Info, IconContainer, Functions, IconDelete, Content } from './styles';

export const Activities: React.FC = () => {
  return (
    <Container>
      <Content>
        <IconContainer>
          <IconMaterial />
        </IconContainer>
        <Info>
          <Title>Material Atividade Aula 02 - PDF para estudo</Title>
          <Date>{moment().format()}</Date>
        </Info>
      </Content>

      <Functions>
        <IconDelete />
      </Functions>
    </Container>
  );
};
