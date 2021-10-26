import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { User } from './User';
import { UserStore } from '~/store';
import { FINANCIAL_STATUS, TYPE_USER } from '~/utils';

type Props = {
  user: UserStore;
};

const UserContainer: React.FC<Props> = ({ user }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [size, setSize] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [adms, setAdms] = useState<UserType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [pendings, setPendings] = useState<UserType[]>([]);

  const updateSize = () => setSize(window.innerWidth);

  const sizeEvent = () => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  };

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleLoad = async () => {
    await user.list();

    user.users.map((user: UserType) =>
      user.financial_status === FINANCIAL_STATUS.WAITING_PAYMENT
        ? setPendings((old) => [...old, user])
        : user.type === TYPE_USER.USER
        ? setUsers((old) => [...old, user])
        : setAdms((old) => [...old, user]),
    );

    setLoaded(true);
  };

  useEffect(() => {
    updateSize();
    sizeEvent();
    handleLoad();
  }, []);

  return (
    <User
      hover={hover}
      setHover={handleHover}
      size={size}
      loaded={loaded}
      users={users}
      adms={adms}
      pendings={pendings}
    />
  );
};

export default inject('user')(observer(UserContainer));
