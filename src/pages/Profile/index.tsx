import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { UserStore } from 'store';
import { getUserData, notify } from '~/utils';

type Props = {
  user: UserStore;
};

const ProfileContainer: React.FC<Props> = ({ user }) => {
  const [loaded, setLoaded] = useState(false);
  const [profile, setProfile] = useState({
    id: '',
    type: '',
    name: '',
    phone: '',
    password: '',
    confirm_password: '',
  });

  const handleUser = async () => {
    const profile = await getUserData();
    setProfile(profile);
    setLoaded(true);
  };

  const handleState = (event: any) => {
    const { name, value } = event.target;
    setProfile((old) => ({ ...old, [name]: value }));
  };

  const submitForm = async (state: any) => {
    const response = await user.update({
      ...state,
      id: profile.id,
      type: profile.type,
    });

    if (response) {
      notify('success', 'Sucesso ao atualizar dados!');
      return window.location.reload();
    }

    return notify('error', 'Erro ao atualizar dados!');
  };

  useEffect(() => {
    handleUser();
  }, []);

  return <Profile submitForm={submitForm} loaded={loaded} profile={profile} handleState={handleState} />;
};

export default inject('user')(observer(ProfileContainer));
