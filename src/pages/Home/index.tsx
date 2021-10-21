import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { DashboardStore } from '~/store';
import Home from './Home';

type Props = {
  dashboard: DashboardStore;
};

const HomeContainer: React.FC<Props> = ({ dashboard }) => {
  const [hover, setHover] = useState<HoverIconsType>('');

  const handleHover = (item: HoverIconsType) => setHover(item);

  const allData = async () => await dashboard.index();

  useEffect(() => {
    allData();
  }, []);

  return <Home hover={hover} setHover={handleHover} allData={dashboard.allData || {}} />;
};

export default inject('dashboard')(observer(HomeContainer));
