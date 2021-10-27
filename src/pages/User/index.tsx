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
  const [loaded, setLoaded] = useState(false);
  const [adms, setAdms] = useState<UserType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [pendings, setPendings] = useState<UserType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
  const [filter, setFilter] = useState(false);

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

  const searchUsers = (query: string) => {
    const filtereds = user.users.filter((user: UserType) => user.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    return setFilteredUsers(filtereds);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <User
      hover={hover}
      setHover={handleHover}
      loaded={loaded}
      users={users}
      adms={adms}
      pendings={pendings}
      filteredUsers={filteredUsers}
      searchUsers={searchUsers}
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default inject('user')(observer(UserContainer));
