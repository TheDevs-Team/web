import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { UserStore } from 'store';
import { notify } from '~/utils';
import { useHistory } from 'react-router-dom';

type Props = {
  user: UserStore;
};

const ProfileContainer: React.FC<Props> = ({ user }) => {
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const fetchUser = async () => {
    setLoaded(false);
    await user.get();
    setLoaded(true);
  };

  const submitForm = async (state: any) => {
    const response = await user.update({
      ...state,
      id: user.profile.id,
      document: user.profile.document,
      type: user.profile.type,
    });

    if (response) {
      notify('success', 'Sucesso ao atualizar dados!');
      return history.push('/');
    }

    return notify('error', 'Erro ao atualizar dados!');
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <Profile submitForm={submitForm} loaded={loaded} />;
};

export default inject('user')(observer(ProfileContainer));
