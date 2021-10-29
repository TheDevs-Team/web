import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import Notifications from './Notifications';
import { NotificationStore } from '~/store';
import { initialValues, validationSchema } from './form';
import { Formik, notify } from '~/utils';

type Props = {
  notification: NotificationStore;
};

export const NotificationsContainer: React.FC<Props> = ({ notification }) => {
  const [hover, setHover] = useState<HoverIconsType>('');
  const [loaded, setLoaded] = useState(true);

  const handleHover = (item: HoverIconsType) => setHover(item);

  const handleSubmit = async (values: NotificationOptionsType) => {
    if (!values.class_notification && !values.new_courses && !values.pendings) {
      return notify('info', 'Selecione pelo menos uma forma de notificação');
    }
    const response = await notification.send(values);

    if (response) {
      return notify('success', 'Notificações enviadas com sucesso');
    }

    return notify('error', 'Opsss, algo de errado aconteceu');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Notifications hover={hover} setHover={handleHover} loaded={loaded} />
    </Formik>
  );
};

export default inject('notification')(observer(NotificationsContainer));
