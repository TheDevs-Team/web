import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { User } from './User';
import { UserStore } from '~/store';
import { FINANCIAL_STATUS, TYPE_USER, notify } from '~/utils';

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
  const [modalRemoveUser, setModalRemoveUser] = useState(false);
  const [modalUpdateUser, setModalUpdateUser] = useState(false);
  const [modalCreateUser, setModalCreateUser] = useState(false);

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

  const beforeClickEdit = async (id: string) => {
    setLoaded(false);
    await user.getOtherProfile(id);
    setLoaded(true);
  };

  const searchUsers = (query: string) => {
    const filtereds = user.users.filter((user: UserType) => user.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    return setFilteredUsers(filtereds);
  };

  const setCurrent = (id: string) => {
    user.setCurrent(id);
  };

  const handleRemoveUser = async () => {
    const response = await user.deleteCurrent();

    if (response) {
      return window.location.reload();
    }

    return notify('error', 'Erro ao remover o usuário');
  };

  const handleUpdateUser = async () => {
    return notify('error', 'Erro ao atualizar o usuário');
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
      modalRemoveUser={modalRemoveUser}
      setModalRemoveUser={setModalRemoveUser}
      setCurrent={setCurrent}
      handleRemoveUser={handleRemoveUser}
      handleUpdateUser={handleUpdateUser}
      modalUpdateUser={modalUpdateUser}
      setModalUpdateUser={setModalUpdateUser}
      setModalCreateUser={setModalCreateUser}
      modalCreateUser={modalCreateUser}
      beforeClickEdit={beforeClickEdit}
    />
  );
};

export default inject('user')(observer(UserContainer));
