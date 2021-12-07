import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { CourseStore, StudentCourseStore } from '~/store';
import Home from './Course';
import { useHistory } from 'react-router-dom';
import { notify } from '~/utils';

type Props = {
  course: CourseStore;
  studentCourse: StudentCourseStore;
};

const CourseContainer: React.FC<Props> = ({ course, studentCourse }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>([]);
  const [modalCreateCourse, setModalCreateCourse] = useState(false);
  const [onRemove, setOnRemove] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [courseData, setCourseData] = useState<CourseType>();

  const history = useHistory();

  const toCourse = (path: string) => history.push(path);

  const onClickCourse = () => notify('info', 'Entre em contato para adquirir novos cursos!');

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await course.list();
    await studentCourse.find();
    setLoaded(true);
  };

  const searchCourses = (query: string) => {
    const filtereds = course.courses.filter(
      (course: CourseType) => course.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
    );
    return setFilteredCourses(filtereds);
  };

  const removeCourse = async () => {
    const response = await course.delete(course.current);

    if (response) {
      notify('success', 'Curso deletado com sucesso!');
      return setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    return notify('error', 'Erro ao deletar curso!');
  };

  const setCurrent = (value: string): void => {
    course.setCurrent(value);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <Home
      hover={hover}
      setHover={handleHover}
      courses={course.courses}
      loaded={loaded}
      myCourses={studentCourse.courses}
      toCourse={toCourse}
      onClickCourse={onClickCourse}
      searchCourses={searchCourses}
      setFilter={setFilter}
      filter={filter}
      filteredCourses={filteredCourses}
      setModalCreateCourse={setModalCreateCourse}
      modalCreateCourse={modalCreateCourse}
      onRemove={onRemove}
      onEdit={onEdit}
      setOnRemove={setOnRemove}
      setOnEdit={setOnEdit}
      removeCourse={removeCourse}
      setCurrent={setCurrent}
      courseData={courseData}
      setCourseData={setCourseData}
    />
  );
};

export default inject('course', 'studentCourse')(observer(CourseContainer));
