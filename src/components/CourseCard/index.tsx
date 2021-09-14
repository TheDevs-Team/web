import React from 'react';

import { Container, Title, DescriptionCourse, Description } from './styles';

type Props = {
  name: string;
  description: string;
};

export const CourseCard: React.FC<Props> = ({ name, description }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <DescriptionCourse>
        <Description>{description}</Description>
      </DescriptionCourse>
    </Container>
  );
};
