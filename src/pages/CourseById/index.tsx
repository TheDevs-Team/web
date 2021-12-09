import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { CourseStore, MaterialStore, StudentCourseStore, UserStore } from '~/store';
import { notify } from '~/utils';
import CourseById from './CourseById';

type Props = {
  course: CourseStore;
  studentCourse: StudentCourseStore;
  user: UserStore;
  material: MaterialStore;
};

const CourseByIdContainer: React.FC<Props> = ({ course, studentCourse, user, material }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState('materials');
  const [addUser, setAddUser] = useState(false);
  const [removeUser, setRemoveUser] = useState(false);

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await course.find();
    await studentCourse.setNotInCourse();
    await studentCourse.setInCourse();
    await material.list();
    setLoaded(true);
  };

  const getCurrentUserID = (): string => {
    return user.current as string;
  };

  const addUserInCourse = async (values: CreateStudentCourseType) => {
    const response = await studentCourse.addInCourse(values);

    if (response) {
      notify('success', 'Usuário adicionado com sucesso!');
      return setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    return notify('error', 'Usuário ja está cadastrado ao curso!');
  };

  const removeUserInCourse = async (values: CreateStudentCourseType) => {
    const response = await studentCourse.removeInCourse(values);

    if (response) {
      notify('success', 'Usuário removido com sucesso!');
      return setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    return notify('error', 'Erro ao remover usuário');
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
      inCourse={studentCourse.inCourses}
      removeUserInCourse={removeUserInCourse}
      removeUser={removeUser}
      setRemoveUser={setRemoveUser}
      materials={material.materials}
    />
  );
};

export default inject('course', 'studentCourse', 'user', 'material')(observer(CourseByIdContainer));
