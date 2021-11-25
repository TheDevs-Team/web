import { inject, observer } from 'mobx-react';
import React from 'react';
import Profile from './Profile';
import { UserStore } from 'store';
import { notify } from '~/utils';
import { useHistory } from 'react-router-dom';

type Props = {
  user: UserStore;
};

const ProfileContainer: React.FC<Props> = ({ user }) => {
  const history = useHistory();

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
  return <Profile submitForm={submitForm} />;
};

export default inject('user')(observer(ProfileContainer));
