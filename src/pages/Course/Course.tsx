/* eslint-disable no-unused-vars */
import React from 'react';
import { If, CreateCourseModal, UpdateCourseModal } from '~/components';
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
  Text,
  HeaderSearch,
  SearchContent,
  SearchIcon,
  SearchInput,
  ButtonAddCourse,
  RemoveCourse,
} from './styles';
import { isEmpty } from 'lodash';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  courses: CourseType[];
  loaded: boolean;
  myCourses: StudentCourseType[];
  toCourse: (path: string) => void;
  onClickCourse: () => void;
  searchCourses: (value: string) => void;
  setFilter: (value: boolean) => void;
  filter: boolean;
  filteredCourses: CourseType[];
  setModalCreateCourse: (values: boolean) => void;
  modalCreateCourse: boolean;
  onEdit: boolean;
  onRemove: boolean;
  setOnRemove: (value: boolean) => void;
  setOnEdit: (value: boolean) => void;
  removeCourse: () => void;
  setCurrent: (value: string) => void;
  setCourseData: (value: CourseType) => void;
  courseData?: CourseType;
};

const Course: React.FC<Props> = ({
  hover,
  setHover,
  courses,
  loaded,
  myCourses,
  toCourse,
  onClickCourse,
  searchCourses,
  setFilter,
  filter,
  filteredCourses,
  modalCreateCourse,
  setModalCreateCourse,
  onEdit,
  setOnEdit,
  onRemove,
  setOnRemove,
  removeCourse,
  setCurrent,
  setCourseData,
  courseData,
}) => {
  return (
    <Container>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={modalCreateCourse}>
        <CreateCourseModal
          onClose={() => setModalCreateCourse(false)}
          onConfirm={() => {
            setModalCreateCourse(false);
          }}
        />
      </If>
      <If condition={onRemove}>
        <RemoveCourse onClose={() => setOnRemove(false)} onConfirm={removeCourse} />
      </If>
      <If condition={onEdit}>
        <UpdateCourseModal data={courseData} onClose={() => setOnEdit(false)} />
      </If>
      <If condition={loaded}>
        <If condition={isAdm()}>
          <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
          <Main>
            <HeaderSearch>
              <SearchContent>
                <SearchIcon />
                <SearchInput
                  placeholder="Buscar cursos"
                  onChange={({ target }) => {
                    searchCourses(target.value);
                    setFilter(!!target.value);
                  }}
                />
              </SearchContent>
              <ButtonAddCourse
                onClick={() => {
                  setModalCreateCourse(!modalCreateCourse);
                }}
              >
                Novo Curso
              </ButtonAddCourse>
            </HeaderSearch>
            <If condition={filter}>
              <CoursesContainer>
                {filteredCourses.map((course: CourseType, idx) => (
                  <CourseCardStyled
                    onEdit={() => {
                      setCourseData(course);
                      setOnEdit(true);
                      setCurrent(course.id);
                    }}
                    onRemove={() => {
                      setOnRemove(true);
                      setCurrent(course.id);
                    }}
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
            </If>
            <If condition={!filter}>
              <CoursesContainer>
                {courses.map((course: CourseType, idx) => (
                  <CourseCardStyled
                    onEdit={() => {
                      setCourseData(course);
                      setOnEdit(true);
                      setCurrent(course.id);
                    }}
                    onRemove={() => {
                      setOnRemove(true);
                      setCurrent(course.id);
                    }}
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
            </If>
          </Main>
        </If>
        <If condition={!isAdm()}>
          <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
          <Main>
            <TitlePage>Meus Cursos</TitlePage>
            <If condition={isEmpty(myCourses)}>
              <Text>Você não está participando de nenhum curso.</Text>
            </If>
            <CoursesContainer userCourses>
              {myCourses.map((course: StudentCourseType, idx) => (
                <CourseCardStyled
                  userCourses
                  key={idx}
                  name={course.course.name}
                  description={textLimiter(course.course.description)}
                  onClick={() => {
                    setCurrentCourseID(course.course.id);
                    toCourse(`/cursos/${course.course.id}`);
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
        </If>
      </If>
    </Container>
  );
};

export default Course;
