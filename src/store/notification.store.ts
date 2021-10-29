import { action, makeObservable } from 'mobx';

import { NotificationAPI } from '~/api';

class NotificationStore {
  constructor() {
    makeObservable(this);
  }

  @action
  send = async (values: NotificationOptionsType): Promise<boolean> => {
    const response = await NotificationAPI.send(values);

    if (response) {
      return true;
    }

    return false;
  };
}

export default NotificationStore;
