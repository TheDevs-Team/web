import React from 'react';

import {
  CoursesCard,
  CoursesCardContentTitle,
  BackgroudIconCard,
  IconMoney,
  TitleCard,
  DescriptionCard,
  CoursesCardContentIcon,
  CoursesCardContentDescription,
} from './styles';

type Props = {
  name: string;
  description: string;
  onClick?: () => void;
};

export const CourseCard: React.FC<Props> = ({ name, description, onClick, ...rest }) => (
  <CoursesCard onClick={onClick} {...{ ...rest }}>
    <CoursesCardContentIcon>
      <BackgroudIconCard>
        <IconMoney />
      </BackgroudIconCard>
    </CoursesCardContentIcon>
    <CoursesCardContentTitle>
      <TitleCard>{name}</TitleCard>
    </CoursesCardContentTitle>
    <CoursesCardContentDescription>
      <DescriptionCard>{description}.</DescriptionCard>
    </CoursesCardContentDescription>
  </CoursesCard>
);
