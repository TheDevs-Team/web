/* eslint-disable no-unused-vars */
import React from 'react';
import { If } from '~/components';

import { Container, MenuStyled, Main, CoursesContainer, CourseCardStyled, LoadingPageStyled } from './styles';

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
                  <CourseCardStyled key={idx} name={course.name} description={course.description} />
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
