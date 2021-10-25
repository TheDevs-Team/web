import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { User } from './User';
import { UserStore } from '~/store';

type Props = {
  user: UserStore;
};

const UserContainer: React.FC<Props> = ({ user }) => {
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
    await user.list();
    setLoaded(true);
  };

  useEffect(() => {
    updateSize();
    sizeEvent();
    handleLoad();
  }, []);

  return <User hover={hover} setHover={handleHover} size={size} loaded={loaded} users={user.users} />;
};

export default inject('user')(observer(UserContainer));
