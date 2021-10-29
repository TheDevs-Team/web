import api from '~/services/api';

class NotificationAPI {
  static send = async (values: NotificationOptionsType): Promise<boolean> => {
    try {
      await api.post('/notification/send', values);
      return true;
    } catch (error) {
      return false;
    }
  };
}

export default NotificationAPI;
