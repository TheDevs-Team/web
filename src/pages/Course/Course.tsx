/* eslint-disable no-unused-vars */
import React from 'react';
import { If } from '~/components';

import {
  Container,
  MenuStyled,
  Main,
  CoursesContainer,
  CoursesCard,
  IconMoney,
  BackgroudIconCard,
  DescriptionCard,
  TitleCard,
  CoursesCardContent,
  LoadingPageStyled,
} from './styles';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  courses: CourseType[];
  size: number;
  loaded: boolean;
};

const Course: React.FC<Props> = ({ hover, setHover, courses, size, loaded }) => {
  return (
    <Container>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        {size >= 950 && (
          <>
            <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
            <Main>
              <CoursesContainer>
                {courses.map((course: CourseType, idx) => (
                  <CoursesCard key={idx}>
                    <CoursesCardContent>
                      <BackgroudIconCard>
                        <IconMoney />
                      </BackgroudIconCard>
                      <TitleCard>{course.name}</TitleCard>
                      <DescriptionCard>{course.description}.</DescriptionCard>
                    </CoursesCardContent>
                  </CoursesCard>
                ))}
              </CoursesContainer>
            </Main>
          </>
        )}
      </If>
    </Container>
  );
};

export default Course;
