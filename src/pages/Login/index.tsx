import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { UserStore } from '~/store';
import { notify } from '~/utils';
import { Login } from './Login';

type Props = {
  user: UserStore;
};

const LoginContainer: React.FC<Props> = ({ user }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await user.login({ email, password });

    if (response) {
      notify('success', 'Bem vindo');
    }

    notify('error', 'Login inválido');
  };

  return <Login onSubmit={onSubmit} setEmail={setEmail} setPassword={setPassword} />;
};

export default inject('user')(observer(LoginContainer));
