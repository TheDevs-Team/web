import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { CourseStore, StudentCourseStore } from '~/store';
import CourseById from './CourseById';

type Props = {
  course: CourseStore;
  studentCourse: StudentCourseStore;
};

const CourseByIdContainer: React.FC<Props> = ({ course, studentCourse }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState('materials');

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await course.find();
    await studentCourse.setNotInCourse();
    setLoaded(true);
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
    />
  );
};

export default inject('course', 'studentCourse')(observer(CourseByIdContainer));
