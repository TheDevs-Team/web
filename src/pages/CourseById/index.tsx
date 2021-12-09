import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { CourseStore, StudentCourseStore, UserStore } from '~/store';
import { notify } from '~/utils';
import CourseById from './CourseById';

type Props = {
  course: CourseStore;
  studentCourse: StudentCourseStore;
  user: UserStore;
};

const CourseByIdContainer: React.FC<Props> = ({ course, studentCourse, user }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState('materials');
  const [addUser, setAddUser] = useState(false);

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await course.find();
    await studentCourse.setNotInCourse();
    setLoaded(true);
  };

  const getCurrentUserID = (): string => {
    return user.current as string;
  };

  const addUserInCourse = async (values: CreateStudentCourseType) => {
    const response = await studentCourse.addInCourse(values);

    if (response) {
      setAddUser(false);
      return notify('success', 'Usuário adicionado com sucesso!');
    }

    return notify('error', 'Usuário ja está cadastrado ao curso!');
  };

  const setCurrent = (id: string) => {
    user.setCurrent(id);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <CourseById
      setTab={setTab}
      tab={tab}
      hover={hover}
      setHover={handleHover}
      loaded={loaded}
      course={course.course}
      notInCourse={studentCourse.notInCourse}
      setAddUser={setAddUser}
      addUser={addUser}
      addUserInCourse={addUserInCourse}
      setCurrent={setCurrent}
      getCurrentUserID={getCurrentUserID}
    />
  );
};

export default inject('course', 'studentCourse', 'user')(observer(CourseByIdContainer));
