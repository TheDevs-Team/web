import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import { UserAPI } from '~/api';
import { setToken } from '~/utils';

class UserStore {
  @persist('object')
  @observable
  profile: UserType;

  @observable
  user = 'USER TESTE';

  @action
  login = async (values: UserLoginType): Promise<boolean> => {
    const response = await UserAPI.Login(values);

    if (response) {
      console.log('STORE:', response.user.name);
      this.profile = response.user as UserType;
      setToken(response.token);

      return true;
    }

    return false;
  };
}

export default UserStore;
