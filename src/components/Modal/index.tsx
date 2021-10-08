import { inject, observer } from 'mobx-react';
import React from 'react';
import { UserStore } from '~/store';
import { Formik, notify } from '~/utils';
import { initialValues, validationSchema } from './form';

import Modal from './Modal';

type Props = {
  user?: UserStore;
  onRegister?: boolean;
  onEdit?: boolean;
  onRemove?: boolean;
  onClose: () => void;
};

const ModalContainer: React.FC<Props> = ({ user, onRegister, onEdit, onRemove, onClose }) => {
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
    const response = await user?.delete(user?.current.id);

    console.log(user?.current);

    console.log(response);

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
      <Modal
        onEdit={onEdit}
        onRegister={onRegister}
        onRemove={onRemove}
        onClose={onClose}
        handleRemoveUser={handleRemoveUser}
      />
    </Formik>
  );
};

export default inject('user')(observer(ModalContainer));
