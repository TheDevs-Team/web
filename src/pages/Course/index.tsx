import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { CourseStore, StudentCourseStore } from '~/store';
import Home from './Course';

type Props = {
  course: CourseStore;
  studentCourse: StudentCourseStore;
};

const CourseContainer: React.FC<Props> = ({ course, studentCourse }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [size, setSize] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const updateSize = () => setSize(window.innerWidth);

  const sizeEvent = () => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  };

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await course.list();
    await studentCourse.find();
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
    updateSize();
    sizeEvent();
  }, []);

  return (
    <Home
      hover={hover}
      setHover={handleHover}
      courses={course.courses}
      size={size}
      loaded={loaded}
      myCourses={studentCourse.courses}
    />
  );
};

export default inject('course', 'studentCourse')(observer(CourseContainer));
