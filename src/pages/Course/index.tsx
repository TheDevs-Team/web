import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { CourseStore } from '~/store';
import Home from './Course';

type Props = {
  course: CourseStore;
};

const CourseContainer: React.FC<Props> = ({ course }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [size, setSize] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const updateSize = () => {
    setSize(window.innerWidth);
  };

  const sizeEvent = () => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  };

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await course.list();
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
    updateSize();
    sizeEvent();
  }, []);

  return <Home hover={hover} setHover={handleHover} courses={course.courses} size={size} loaded={loaded} />;
};

export default inject('course')(observer(CourseContainer));
