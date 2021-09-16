/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { observer, inject } from 'mobx-react';
import { Course } from './Course';

const CourseContainer: React.FC = () => {
  const { name } = JSON.parse(localStorage.getItem('@g2k:user')!);
  const user = JSON.parse(localStorage.getItem('@g2k:user')!);

  console.log(user);

  return <Course name={name} />;
};

export default inject('user')(observer(CourseContainer));
