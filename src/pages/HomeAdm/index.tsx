import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { HomeAdm } from './HomeAdm';
import api from '~/services/api';

const HomeAdmContainer: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const fetchUsers = async () => {
    const { data } = await api.get('/user/list');
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <HomeAdm users={users} />;
};

export default inject('user')(observer(HomeAdmContainer));
