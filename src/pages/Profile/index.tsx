import { inject, observer } from 'mobx-react';
import React from 'react';
import Profile from './Profile';
import { UserStore } from 'store';

type Props = {
  user: UserStore;
};

const ProfileContainer: React.FC<Props> = ({ user }) => {
  const submitForm = (state: any) => {
    user.update({ ...state, id: user.profile.id, document: user.profile.document, type: user.profile.type });
  };
  return <Profile submitForm={submitForm} />;
};

export default inject('user')(observer(ProfileContainer));
