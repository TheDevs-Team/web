import api from '~/services/api';

class UserAPI {
  static login = async (values: UserLoginType): Promise<UserLoginResponse | null> => {
    try {
      const { data } = await api.post('/user/login', values);
      return data || null;
    } catch (error) {
      return null;
    }
  };

  static list = async (): Promise<UserType[] | []> => {
    try {
      const { data } = await api.get('/user/list');
      return data;
    } catch (error) {
      return [];
    }
  };
}

export default UserAPI;
