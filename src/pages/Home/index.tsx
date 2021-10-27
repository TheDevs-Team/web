import { inject, observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { DashboardStore, UserStore } from '~/store';
import Home from './Home';
import { notify } from '~/utils';

type Props = {
  dashboard: DashboardStore;
  user: UserStore;
};

const HomeContainer: React.FC<Props> = ({ dashboard, user }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [loaded, setLoaded] = useState(false);

  const onClickCourse = () => notify('info', 'Entre em contato para adquirir novos cursos!');

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await user.get();
    await dashboard.index();
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <Home
      onClickCourse={onClickCourse}
      hover={hover}
      setHover={handleHover}
      allData={dashboard.allData}
      user={user.profile}
      loaded={loaded}
    />
  );
};

export default inject('dashboard', 'user')(observer(HomeContainer));
