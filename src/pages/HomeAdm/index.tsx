import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { HomeAdm } from './HomeAdm';
import api from '~/services/api';

const HomeAdmContainer: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [createUser, setCreateUser] = useState(false);

  const fetchUsers = async () => {
    const { data } = await api.get('/user/list');
    setUsers(data);
  };

  const handleModalUser = (): void => setCreateUser(!createUser);

  useEffect(() => {
    fetchUsers();
  }, []);

  return <HomeAdm users={users} setCreateUser={handleModalUser} createUser={createUser} />;
};

export default inject('user')(observer(HomeAdmContainer));
