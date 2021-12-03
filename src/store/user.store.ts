import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { UserAPI } from '~/api';
import { setToken, setTypeUser, setUserData } from '~/utils';

class UserStore {
  @persist
  @observable
  profile: UserType = {
    id: '',
    name: '',
    document: '',
    email: '',
    phone: '',
    type: '',
    financial_status: '',
    password: '',
    active: true,
  };

  @persist
  @observable
  users: UserType[] = [];

  @persist
  @observable
  usersByType: ListUsersByType[] = [
    {
      adms: [
        {
          id: '',
          name: '',
          document: '',
          email: '',
          phone: '',
          type: '',
          financial_status: '',
          password: '',
          active: true,
        },
      ],

      users: [
        {
          id: '',
          name: '',
          document: '',
          email: '',
          phone: '',
          type: '',
          financial_status: '',
          password: '',
          active: true,
        },
      ],
    },
  ];

  @persist
  @observable
  current: string | undefined | null;

  constructor() {
    makeObservable(this);
  }

  @action
  login = async (values: UserLoginType): Promise<boolean> => {
    const response = await UserAPI.login(values);

    if (response) {
      setToken(response.token);
      setTypeUser(response.user.type);
      setUserData(JSON.stringify(response.user));
      this.profile = response.user;

      return true;
    }

    return false;
  };

  @action
  list = async (): Promise<UserType[] | null> => {
    const response = await UserAPI.list();

    if (response) {
      return (this.users = response);
    }

    return null;
  };

  @action
  create = async (values: CreateUserType): Promise<boolean> => {
    const response = await UserAPI.create(values);

    if (response) {
      return true;
    }
    return false;
  };

  @action
  update = async (values: any): Promise<boolean> => {
    const response = await UserAPI.update(values);

    if (response) {
      setUserData(JSON.stringify(response));
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
  deleteCurrent = async (): Promise<boolean> => {
    const response = await UserAPI.delete(this.current as string);

    if (response) {
      return true;
    }

    return false;
  };

  @action
  setCurrent = (id?: string) => {
    return (this.current = id);
  };

  @action
  get = async (): Promise<UserType | null> => {
    const response = await UserAPI.get();

    if (response) {
      this.profile = response;

      const data = JSON.stringify(response);
      setUserData(data);

      return response;
    }

    return null;
  };
}

export default UserStore;
