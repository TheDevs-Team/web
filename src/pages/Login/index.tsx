import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { UserStore } from '~/store';
import { Login } from './Login';

type Props = {
  user: UserStore;
};

const LoginContainer: React.FC<Props> = ({ user }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  console.log(user.profile);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await user.login({ email, password });

    console.log(response);
  };

  return <Login onSubmit={onSubmit} setEmail={setEmail} setPassword={setPassword} />;
};

export default inject('user')(observer(LoginContainer));
