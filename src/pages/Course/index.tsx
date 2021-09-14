import React from 'react';
import { observer, inject } from 'mobx-react';
import { UserStore } from '~/store';
import { Course } from './Course';

type Props = {
  user: UserStore;
};

const CourseContainer: React.FC<Props> = ({ user }) => {
  console.log(user.profile);

  return <Course name={user.profile.name} />;
};

export default inject('user')(observer(CourseContainer));
