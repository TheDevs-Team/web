import api from '~/services/api';

class UserApi {
  Login = async (values: UserLoginType) => {
    try {
      const data = await api.post('/user/login', values);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new UserApi();
