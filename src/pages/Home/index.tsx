import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { DashboardStore, UserStore } from '~/store';
import Home from './Home';

type Props = {
  dashboard: DashboardStore;
  user: UserStore;
};

const HomeContainer: React.FC<Props> = ({ dashboard, user }) => {
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

  const getUser = async () => await user.get();

  useEffect(() => {
    allData();
    updateSize();
    sizeEvent();
    getUser();
  }, []);

  return (
    <Home
      hover={hover}
      setHover={handleHover}
      allData={dashboard.allData || {}}
      size={size}
      user={user.profile || {}}
    />
  );
};

export default inject('dashboard', 'user')(observer(HomeContainer));
