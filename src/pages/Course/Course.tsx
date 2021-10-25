/* eslint-disable no-unused-vars */
import React from 'react';
import { If } from '~/components';
import { textLimiter, setCurrentCourseID } from '~/utils';

import { isAdm } from '~/services/auth';
import {
  Container,
  MenuStyled,
  Main,
  CoursesContainer,
  CourseCardStyled,
  LoadingPageStyled,
  TitlePage,
} from './styles';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  courses: CourseType[];
  size: number;
  loaded: boolean;
  myCourses: StudentCourseType[];
  toCourse: (path: string) => void;
  onClickCourse: () => void;
};

const Course: React.FC<Props> = ({ hover, setHover, courses, size, loaded, myCourses, toCourse, onClickCourse }) => {
  return (
    <Container>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        <If condition={isAdm()}>
          {size >= 950 && (
            <>
              <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
              <Main>
                <CoursesContainer>
                  {courses.map((course: CourseType, idx) => (
                    <CourseCardStyled
                      onClick={() => {
                        setCurrentCourseID(course.id);
                        toCourse(`/cursos/${course.id}`);
                      }}
                      key={idx}
                      name={course.name}
                      description={textLimiter(course.description)}
                    />
                  ))}
                </CoursesContainer>
              </Main>
            </>
          )}
        </If>
        <If condition={!isAdm()}>
          {size >= 950 && (
            <>
              <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
              <Main>
                <TitlePage>Meus Cursos</TitlePage>
                <CoursesContainer userCourses>
                  {myCourses.map((course: StudentCourseType, idx) => (
                    <CourseCardStyled
                      userCourses
                      key={idx}
                      name={course.course.name}
                      description={textLimiter(course.course.description)}
                      onClick={() => {
                        setCurrentCourseID(course.id);
                        toCourse(`/cursos/${course.id}`);
                      }}
                    />
                  ))}
                </CoursesContainer>

                <TitlePage>Cursos Disponíveis</TitlePage>

                <CoursesContainer>
                  {courses.map((course: CourseType, idx) => (
                    <CourseCardStyled
                      key={idx}
                      name={course.name}
                      description={textLimiter(course.description)}
                      onClick={onClickCourse}
                    />
                  ))}
                </CoursesContainer>
              </Main>
            </>
          )}
        </If>
      </If>
    </Container>
  );
};

export default Course;
