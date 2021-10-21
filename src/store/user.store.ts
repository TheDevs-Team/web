import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { UserAPI } from '~/api';
import { setToken, setUserData, USER_STATUS_FINANCEIRO } from '~/utils';

class UserStore {
  @persist
  @observable
  profile: UserType;

  @persist
  @observable
  users: UserType[] | [];

  @persist
  @observable
  current: string | undefined;

  constructor() {
    makeObservable(this);
  }

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
    const response = await UserAPI.create({
      ...values,
      financial_status: values.financial_status === USER_STATUS_FINANCEIRO.PAGO ? 'PAID' : 'WAITING_PAYMENT',
    });

    if (response) {
      return true;
    }
    return false;
  };

  @action
  delete = async (id: string): Promise<boolean> => {
    const response = await UserAPI.delete(id);

    if (response) {
      return true;
    }

    return false;
  };

  @action
  setCurrent = (id?: string) => {
    return (this.current = id);
  };
}

export default UserStore;
