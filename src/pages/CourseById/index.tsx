import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { CourseStore } from '~/store';
import CourseById from './CourseById';

type Props = {
  course: CourseStore;
};

const CourseByIdContainer: React.FC<Props> = ({ course }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState('materials');

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await course.find();
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <CourseById setTab={setTab} tab={tab} hover={hover} setHover={handleHover} loaded={loaded} course={course.course} />
  );
};

export default inject('course')(observer(CourseByIdContainer));
