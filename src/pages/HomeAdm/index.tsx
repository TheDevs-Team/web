import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { HomeAdm } from './HomeAdm';
import { UserStore } from 'store';

type Props = {
  user: UserStore;
};

const HomeAdmContainer: React.FC<Props> = ({ user }) => {
  const [createUser, setCreateUser] = useState(false);
  const [removeUser, setRemoveUser] = useState(false);

  const handleModalUser = (): void => setCreateUser(!createUser);

  const handleModalRemoveUser = (id?: string): void => {
    user.setCurrent(id);
    setRemoveUser(!removeUser);
  };

  const getUsers = async () => await user.list();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <HomeAdm
      users={user?.users}
      setCreateUser={handleModalUser}
      createUser={createUser}
      removeUser={removeUser}
      setRemoveUser={handleModalRemoveUser}
    />
  );
};

export default inject('user')(observer(HomeAdmContainer));
