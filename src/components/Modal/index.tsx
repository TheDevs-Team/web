import { inject, observer } from 'mobx-react';
import React from 'react';
import { UserStore } from '~/store';
import { Formik, notify } from '~/utils';
import { initialValues, validationSchema } from './form';

import Modal from './Modal';

type Props = {
  user?: UserStore;
  onClose: () => void;
};

const ModalContainer: React.FC<Props> = ({ user, onClose }) => {
  const handleSubmit = async (values: CreateUserType) => {
    const response = await user?.create(values);

    if (response) {
      notify('success', 'Usuário cadastrado com sucesso');
      return setTimeout(() => {
        location.reload();
      }, 1500);
    }

    return notify('error', 'Erro ao Criar o usuário');
  };

  const handleRemoveUser = async () => {
    const response = await user?.delete(user?.current as string);

    if (response) {
      notify('success', 'Usuário Removido com sucesso');
      return setTimeout(() => {
        location.reload();
      }, 1500);
    }

    return notify('error', 'Falha ao remover o usuário');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Modal onClose={onClose} handleRemoveUser={handleRemoveUser} />
    </Formik>
  );
};

export default inject('user')(observer(ModalContainer));
