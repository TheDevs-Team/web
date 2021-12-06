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

  static create = async (values: CreateUserType): Promise<boolean> => {
    try {
      await api.post('/user/create', values);
      return true;
    } catch (error) {
      return false;
    }
  };

  static update = async (values: UserType): Promise<UserType | false> => {
    try {
      const { data } = await api.put('/user/update', values);
      return data;
    } catch (error) {
      return false;
    }
  };

  static delete = async (id: string): Promise<boolean> => {
    try {
      await api.post('/user/delete', { id });
      return true;
    } catch (error) {
      return false;
    }
  };

  static get = async (): Promise<UserType | null> => {
    try {
      const { data } = await api.get('/user/find');
      return data;
    } catch (error) {
      return null;
    }
  };

  static getOtherProfile = async (id: string): Promise<UserType | null> => {
    try {
      const { data } = await api.post('/user/find-other-profile', { id });
      return data;
    } catch (error) {
      return null;
    }
  };
}

export default UserAPI;
