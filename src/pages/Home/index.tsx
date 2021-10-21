import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { isAdm } from '~/services/auth';
import { DashboardStore } from '~/store';
import Home from './Home';

type Props = {
  dashboard: DashboardStore;
};

const HomeContainer: React.FC<Props> = ({ dashboard }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [size, setSize] = useState(0);

  const updateSize = () => {
    setSize(window.innerWidth);
  };

  const sizeEvent = () => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  };

  const handleHover = (item: HoverIconsType) => setHover(item);

  const allData = async () => await dashboard.index();

  console.log(isAdm());

  useEffect(() => {
    allData();
  }, []);

  useEffect(() => {
    updateSize();
    sizeEvent();
  }, []);

  return <Home hover={hover} setHover={handleHover} allData={dashboard.allData || {}} size={size} />;
};

export default inject('dashboard')(observer(HomeContainer));
