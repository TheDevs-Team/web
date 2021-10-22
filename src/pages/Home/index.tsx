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
    await user.get();
    await dashboard.index();
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
      allData={dashboard.allData}
      size={size}
      user={user.profile}
      loaded={loaded}
    />
  );
};

export default inject('dashboard', 'user')(observer(HomeContainer));
