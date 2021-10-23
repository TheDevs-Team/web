import React from 'react';

import { CoursesCard, CoursesCardContent, BackgroudIconCard, IconMoney, TitleCard, DescriptionCard } from './styles';

type Props = {
  name: string;
  description: string;
};

export const CourseCard: React.FC<Props> = ({ name, description, ...rest }) => (
  <CoursesCard {...{ ...rest }}>
    <CoursesCardContent>
      <BackgroudIconCard>
        <IconMoney />
      </BackgroudIconCard>
      <TitleCard>{name}</TitleCard>
      <DescriptionCard>{description}.</DescriptionCard>
    </CoursesCardContent>
  </CoursesCard>
);
