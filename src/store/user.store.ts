import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import { UserAPI } from '~/api';
import { setToken } from '~/utils';

class UserStore {
  @persist('object')
  @observable
  profile!: UserType;

  @observable
  user = 'USER TESTE';

  @action
  login = async (values: UserLoginType): Promise<boolean> => {
    const response = await UserAPI.Login(values);

    console.log('api response', response);

    if (response) {
      this.profile = response.user;
      setToken(response.token);

      return true;
    }

    return false;
  };
}

export default UserStore;
