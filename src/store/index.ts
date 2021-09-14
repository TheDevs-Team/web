import UserStore from './user.store';

class RootStore {
  public user: any;

  constructor() {
    this.user = new UserStore();
  }
}

const store = new RootStore();

export { UserStore };

export default store;
