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

  const history = useHistory();

  const toCourse = (path: string) => history.push(path);

  const onClickCourse = () => notify('info', 'Entre em contato para adquirir novos cursos!');

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await course.list();
    await studentCourse.find();
    setLoaded(true);
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
    />
  );
};

export default inject('course', 'studentCourse')(observer(CourseContainer));
