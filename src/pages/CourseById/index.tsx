import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { CourseStore } from '~/store';
import CourseById from './CourseById';

import { getCurrentCourseID } from '~/utils';

type Props = {
  course: CourseStore;
};

const CourseByIdContainer: React.FC<Props> = ({ course }) => {
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
    await course.find();
    setLoaded(true);
  };

  const getTest = () => getCurrentCourseID();

  useEffect(() => {
    console.log(getTest());
    updateSize();
    sizeEvent();
    handleLoad();
  }, []);

  return <CourseById hover={hover} setHover={handleHover} size={size} loaded={loaded} course={course.course} />;
};

export default inject('course')(observer(CourseByIdContainer));
