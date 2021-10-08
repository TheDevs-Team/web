import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
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
  const [error, setError] = useState(false);

  const handleSubmit = async (values: CreateUserType) => {
    const response = await user?.create(values);

    if (response) {
      notify('success', 'Usuário cadastrado com sucesso');
      return setTimeout(() => {
        location.reload();
      }, 1500);
    }

    return notify('error', 'Não Criado');
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Modal
        onEdit={onEdit}
        onRegister={onRegister}
        onRemove={onRemove}
        onClose={onClose}
        setError={handleError}
        error={error}
      />
    </Formik>
  );
};

export default inject('user')(observer(ModalContainer));
