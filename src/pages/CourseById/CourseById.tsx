/* eslint-disable no-unused-vars */
import React from 'react';
import { If } from '~/components';
import { isAdm } from '~/services/auth';
import { Container, MenuStyled, Main, LoadingPageStyled } from './styles';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  size: number;
  loaded: boolean;
  course: CourseType;
};

const CourseById: React.FC<Props> = ({ hover, setHover, size, loaded, course }) => {
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
                <p>{course.name}</p>
                <p>{course.description}</p>
                <p>{course.id}</p>
                <p></p>
                <p></p>
              </Main>
            </>
          )}
        </If>
        <If condition={!isAdm()}>
          {size >= 950 && (
            <>
              <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
              <Main></Main>
            </>
          )}
        </If>
      </If>
    </Container>
  );
};

export default CourseById;
