import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import { UserAPI } from '~/api';
import { setToken, setUserData } from '~/utils';

class UserStore {
  @persist('object')
  @observable
  profile: UserType;

  @observable
  users: UserType[] | [];

  @action
  login = async (values: UserLoginType): Promise<boolean> => {
    const response = await UserAPI.login(values);

    if (response) {
      setUserData(response.user as unknown as string);
      setToken(response.token);

      return true;
    }

    return false;
  };

  @action
  list = async (): Promise<UserType[] | []> => {
    const response = await UserAPI.list();

    if (response) {
      return (this.users = response);
    }

    return [];
  };

  @action
  create = async (values: CreateUserType): Promise<boolean> => {
    const response = await UserAPI.create(values);

    if (response) {
      return true;
    }
    return false;
  };
}

export default UserStore;
