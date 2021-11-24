import { inject, observer } from 'mobx-react';
import React from 'react';
import Profile from './Profile';
import { UserStore } from 'store';

type Props = {
  user: UserStore;
};

const ProfileContainer: React.FC<Props> = ({ user }) => {
  const id = user.profile.id;
  const submitForm = (state: any) => {
    user.update({ ...state, id });
  };
  return <Profile submitForm={submitForm} />;
};

export default inject('user')(observer(ProfileContainer));
