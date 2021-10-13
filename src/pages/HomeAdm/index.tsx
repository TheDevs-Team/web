import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { HomeAdm } from './HomeAdm';
import api from '~/services/api';
import { UserStore } from 'store';

type Props = {
  user: UserStore;
};

const HomeAdmContainer: React.FC<Props> = ({ user }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [createUser, setCreateUser] = useState(false);
  const [removeUser, setRemoveUser] = useState(false);

  const fetchUsers = async () => {
    const { data } = await api.get('/user/list');
    setUsers(data);
  };

  const handleModalUser = (): void => setCreateUser(!createUser);

  const handleModalRemoveUser = (id?: string): void => {
    user.setCurrent(id);
    setRemoveUser(!removeUser);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <HomeAdm
      users={users}
      setCreateUser={handleModalUser}
      createUser={createUser}
      removeUser={removeUser}
      setRemoveUser={handleModalRemoveUser}
    />
  );
};

export default inject('user')(observer(HomeAdmContainer));
