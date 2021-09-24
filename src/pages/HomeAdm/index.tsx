import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { CourseStore } from '~/store';
import { HomeAdm } from './HomeAdm';

type Props = {
  course: CourseStore;
};

const HomeAdmContainer: React.FC<Props> = ({ course }) => {
  const fetchCourses = async () => await course.list();

  useEffect(() => {
    fetchCourses();
  }, []);

  return <HomeAdm />;
};

export default inject('course')(observer(HomeAdmContainer));
