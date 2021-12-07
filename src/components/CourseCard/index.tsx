import React, { useState } from 'react';
import { isAdm } from '~/services/auth';
import { If } from '..';

import {
  CoursesCard,
  CoursesCardContentTitle,
  BackgroudIconCard,
  IconMoney,
  TitleCard,
  DescriptionCard,
  CoursesCardContentIcon,
  CoursesCardContentDescription,
  OptionsCard,
  IconDelete,
  IconEdit,
} from './styles';

type Props = {
  name: string;
  description: string;
  onClick?: () => void;
  onRemove?: () => void;
  onEdit?: () => void;
};

export const CourseCard: React.FC<Props> = ({ name, description, onClick, onRemove, onEdit, ...rest }) => {
  const [hover, setHover] = useState(false);

  return (
    <CoursesCard {...{ ...rest }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <OptionsCard>
        <If condition={isAdm() && hover}>
          <IconEdit onClick={onEdit} />
          <IconDelete onClick={onRemove} />
        </If>
      </OptionsCard>
      <CoursesCardContentIcon onClick={onClick}>
        <BackgroudIconCard>
          <IconMoney />
        </BackgroudIconCard>
      </CoursesCardContentIcon>
      <CoursesCardContentTitle onClick={onClick}>
        <TitleCard>{name}</TitleCard>
      </CoursesCardContentTitle>
      <CoursesCardContentDescription onClick={onClick}>
        <DescriptionCard>{description}.</DescriptionCard>
      </CoursesCardContentDescription>
    </CoursesCard>
  );
};
