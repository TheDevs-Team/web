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
}

export default UserAPI;
